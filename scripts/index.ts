import { makeAdjusterFromSamples } from "../src"
import chalk from "chalk"
import { samples } from "../fixtures/color/examples"

// -----------------------------------------------------------------------------

const adjustColor = makeAdjusterFromSamples(samples, 2)

// -----------------------------------------------------------------------------

const format = (name: string, rgb: number[]) =>
  chalk.bgRgb(rgb[0], rgb[1], rgb[2]).hex("#404040")(
    name + " (" + rgb.map(color => color.toString().padStart(3)).join(",") + ") "
  )

// -----------------------------------------------------------------------------

samples.forEach(([departure, arrival]) => {
  const mapped = adjustColor(departure)

  process.stdout.write(
    " " + format("", departure) + "" + format("", arrival) + "" + format("", mapped) + " \n"
  )
})
