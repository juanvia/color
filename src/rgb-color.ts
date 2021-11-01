import { right, left, chain, map, filterOrElse, fromNullable, fromOption } from "fp-ts/lib/Either"
import * as MayBe from "fp-ts/Option"
import { pipe } from "fp-ts/function"
import webColors from "./web-colors"
import { match } from "fp-ts-contrib/RegExp"
import {
  RGBHash,
  WEBColor,
  MakeRGBHashFunction,
  MakeRGBHashFromCSSNotationFunction,
  MakeRGBHashFromArrayFunction,
  MakeRGBHashFromNameFunction,
} from "./types"
const js = JSON.stringify

// ------------------------------------------------------------------------------------------------

/**
 * Creates a RGBColor object from argument list
 * @param  {number} red
 * @param  {number} green
 * @param  {number} blue
 * @returns E
 */
export const makeRGBHash: MakeRGBHashFunction = (red, green, blue) =>
  red >= 0 && green >= 0 && blue >= 0 && red <= 255 && green <= 255 && blue <= 255
    ? right({
        space: "rgb",
        red,
        green,
        blue,
      })
    : pipe(new Error(`${js([red, green, blue])} is not a correct RGB specification`), left)

// ------------------------------------------------------------------------------------------------

/**
 * Creates a new RGBColor object from an array ([red, green, blue, ...ignored_rest])
 * @param  {number[]} x
 * @returns E
 */
export const makeRGBHashFromArray: MakeRGBHashFromArrayFunction = x =>
  x.length < 3
    ? left(new Error(`The vector ${js(x)} cannot be converted to a RGBColor`))
    : makeRGBHash(x[0], x[1], x[2])

// ------------------------------------------------------------------------------------------------

/**
 * Creates an RGBColor object from a css color specification string e.g. "RGB(10,20,40)"
 * @param  {string} css
 * @returns E
 */
export const makeRGBHashFromCSSNotation: MakeRGBHashFromCSSNotationFunction = css => {
  return pipe(
    css.trim().replaceAll(/[ \t\n\f]/g, ""),
    match(/RGB\(([0-9]+),([0-9]+),([0-9]+)\)/),
    MayBe.map(Array.from),
    fromOption(() => new Error(`'${css}' is a bad, ugly CSS RGB notation'`)),
    filterOrElse(
      matches => matches.length === 4,
      matches => new Error(`The RegExp match array length must be 4, it's ${matches.length} `)
    ),
    map(matches => matches.map(x => Number(x)).slice(1, 4)),
    chain(makeRGBHashFromArray)
  )
}

// ------------------------------------------------------------------------------------------------
/**
 *
 */
export const makeRGBHashFromName: MakeRGBHashFromNameFunction = colorName =>
  pipe(
    webColors.find(o => o.name === colorName),
    fromNullable(new Error(`"${colorName} is not a web color name`)),
    map((o: WEBColor) => o.rgb),
    chain(makeRGBHashFromCSSNotation)
  )

// ------------------------------------------------------------------------------------------------
