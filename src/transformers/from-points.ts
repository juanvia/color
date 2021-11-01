#!/usr/bin/env node
import { flatten } from "fp-ts/lib/Array"
import { makeFromPoints, evaluate } from "@juanvia/polynomial"
import { makeMatrix, fromArray } from "@juanvia/matrix"
import { PolynomialsFromSamplesFunction, RGBTriple, Samples } from "../types"

export const polynomialsFromSamples: PolynomialsFromSamplesFunction = (examples, degree) => {
  const D = makeMatrix(examples.length, 6, flatten(flatten(examples)))
  return makeFromPoints(degree, D, 3)
}

export const makeAdjusterFromSamples = (examples: Samples, degree: number) => {
  const [polyRed, polyGreen, polyBlue] = polynomialsFromSamples(examples, degree)

  return (color: RGBTriple): RGBTriple => {
    const colorMatrix = fromArray([color])
    return [
      Math.round(evaluate(polyRed, colorMatrix)),
      Math.round(evaluate(polyGreen, colorMatrix)),
      Math.round(evaluate(polyBlue, colorMatrix)),
    ]
  }
}
