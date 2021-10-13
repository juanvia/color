import { makeFromPoints, evaluate } from "@juanvia/polynomial"
import { fromArray } from "@juanvia/matrix"
import { polynomialsFromSamples } from "../src/transformers/from-points"
import chalk from "chalk"
const examples = [
  [
    [235, 111, 147],
    [225, 106, 142],
  ],
  [
    [110, 152, 150],
    [96, 142, 140],
  ],
  [
    [255, 255, 255],
    [204, 204, 204],
  ],
  [
    [240, 238, 234],
    [234, 231, 228],
  ],
  [
    [234, 231, 228],
    [226, 222, 218],
  ],
  [
    [209, 208, 206],
    [120, 116, 113],
  ],
  [
    [151, 148, 147],
    [114, 110, 109],
  ],
  [
    [120, 116, 113],
    [81, 78, 75],
  ],
  [
    [23, 18, 15],
    [0, 0, 0],
  ],
  [
    [255, 236, 228],
    [252, 231, 219],
  ],
  [
    [252, 128, 100],
    [241, 115, 82],
  ],
  [
    [255, 245, 223],
    [252, 243, 216],
  ],
  [
    [226, 172, 98],
    [214, 155, 63],
  ],
  [
    [240, 249, 222],
    [236, 244, 215],
  ],
  [
    [130, 188, 126],
    [109, 173, 111],
  ],
]

// -----------------------------------------------------------------------------

const [polyRed, polyGreen, polyBlue] = polynomialsFromSamples(examples)

// -----------------------------------------------------------------------------

const format = (name: string, rgb: number[]) =>
  chalk.bgRgb(rgb[0], rgb[1], rgb[2]).hex("#404040")(
    name + " (" + rgb.map(color => color.toString().padStart(3)).join(",") + ") "
  )

// -----------------------------------------------------------------------------

examples.forEach(([departure, arrival]) => {
  const x = fromArray([departure])
  const red = Math.round(evaluate(polyRed, x))
  const green = Math.round(evaluate(polyGreen, x))
  const blue = Math.round(evaluate(polyBlue, x))
  const mapped = [red, green, blue]

  process.stdout.write(
    " " + format("", departure) + "" + format("", arrival) + "" + format("", mapped) + " \n"
  )
})
