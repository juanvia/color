import { Polynomial } from "@juanvia/polynomial"
import { Either } from "fp-ts/lib/Either"

//#region Hashes
export type RGBHash = {
  space: "rgb"
  red: number
  green: number
  blue: number
}
export type RGBHashPalette = Array<RGBHash>
export type ColorHash = RGBHash
//#endregion

//#region Tuples (Main types)
export type RGBTriple = [red: number, green: number, blue: number]
export type Color = RGBTriple
export type Swatch = Color
export type Palette = Array<Swatch>
export type ToRGBFunction = (color: Color) => RGBTriple
export type FromRGBFunction = (rgb: RGBTriple) => Color
//#endregion

//#region Color API

//#endregion

//#region Helper types
export type WEBColor = {
  index: number
  name: string
  href: string
  hexa: string
  rgb: string
}
//#endregion

//#region RGBColor API
export type MakeRGBHashFunction = (r: number, g: number, b: number) => Either<Error, RGBHash>
export type MakeRGBHashFromArrayFunction = (e: number[]) => Either<Error, RGBHash>
export type MakeRGBHashFromCSSNotationFunction = (css: string) => Either<Error, RGBHash>
export type MakeRGBHashFromNameFunction = (colorName: string) => Either<Error, RGBHash>
//#endregion

//#region Samples
export type Sample = [RGBTriple, RGBTriple]
export type Samples = Sample[]
export type RGBPolynomials = Polynomial[]
export type PolynomialsFromSamplesFunction = (samples: Samples, degree: number) => RGBPolynomials
//#endregion
