import { resolve } from "path"
import { runFiles } from "@xaviervia/micro-snapshots"

const shouldOverwrite = process.argv.includes("-u")

runFiles([resolve(__dirname, "makeAdjusterFromSamples.spec.ts")], {
  shouldOverwrite,
})
