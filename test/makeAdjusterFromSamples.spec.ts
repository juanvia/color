import { samples } from "../fixtures/color/examples"
import { makeAdjusterFromSamples } from "../src/transformers/from-points"

export const tests = [
  [
    "use samples to calculate a color",
    () => {
      const adjuster = makeAdjusterFromSamples(samples, 2)
      return adjuster(samples[0][0])
    },
  ],
]
