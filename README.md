# @juanvia/color

TypeScript utility to work with RGB color. Work in progress.

Supports extrapolating a color transformation from an array of samples, using the Least Squares method for obtaining the polynomials used in the extrapolating function.

## API

### `makeAdjusterFromSamples`

```ts
import { makeAdjusterFromSamples } from "@juanvia/color"

const samples = [
  [
    [240, 249, 222],
    [236, 244, 215],
  ],
  [
    [130, 188, 126],
    [109, 173, 111],
  ],
  // Note that many more than two examples are necessary for the extrapolation to be reliable
]

const degree = 2 // The degree of the polynomial used for approximating the samples
// The higher the degree, the more the precision, but also the more samples are required
// Too high a degree might lead to overfitting

const adjuster = makeAdjusterFromSamples(samples, degree)

adjuster([226, 172, 98]) // Outputs a color according to the extrapolation
```
