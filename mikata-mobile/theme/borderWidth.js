const { hairlineWidth, pixelRatio } = require("nativewind/dist/theme-functions");

module.exports = {
  hairline: hairlineWidth(),
  active: pixelRatio({
    1: 1,
    1.5: 0.5,
    2: 0.75,
    3: 0.5
  })
}