#!/usr/bin/env node
import { flatten } from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/function"
import { makeFromPoints, evaluate } from "@juanvia/polynomial"
import { makeMatrix, fromArray } from "@juanvia/matrix"
import { PolynomialsFromSamplesFunction } from "../types"

export const polynomialsFromSamples: PolynomialsFromSamplesFunction = examples => {
  const D = makeMatrix(examples.length, 6, flatten(flatten(examples)))
  return makeFromPoints(2, D, 3)
}
