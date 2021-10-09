import * as RGBColor from "../src/rgb-color"
import { colors } from './colors'
console.log(RGBColor.makeRGBHash(200,100,0))
console.log(RGBColor.makeRGBHashFromName('RebeccaPurple'))
console.log(RGBColor.makeRGBHashFromCSSNotation('RGB(1,2,4)'))
console.log(RGBColor.makeRGBHashFromCSSNotation('RGB(245,255,250)'))
console.log(RGBColor.makeRGBHashFromName('MintCream'))
colors()