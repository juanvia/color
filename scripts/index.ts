import * as RGBColor from "../src/rgb-color"
import { colors } from './colors'
console.log(RGBColor.make(200,100,0))
console.log(RGBColor.makeFromName('RebeccaPurple'))
console.log(RGBColor.makeFromCSSNotation('RGB(1,2,4)'))
console.log(RGBColor.makeFromCSSNotation('RGB(245,255,250)'))
console.log(RGBColor.makeFromName('MintCream'))
colors()