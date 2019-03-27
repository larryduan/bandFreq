var bandList = [
  {
    band: 257, name: 'n257',
    chanInfo: { NRange: ["2054166-2104165"], NFirst: [2054166], NLast: [2104165] },
  }, {
    band: 258, name: 'n258',
    chanInfo: { NRange: ["2016667-2070832"], NFirst: [2016667], NLast: [2070832] },
  }, {
    band: 260, name: 'n260',
    chanInfo: { NRange: ["2229166-2279165"], NFirst: [2229166], NLast: [2279165] },
  }, {
    band: 261, name: 'n261',
    chanInfo: { NRange: ["2070833-2084999"], NFirst: [2070833], NLast: [2084999] },
  }
]

var freqRefOffs = 24250.080
var chanRefOffs = 2016667
var raster = 0.060

module.exports = {
  bandList: bandList,
  freqRefOffs: freqRefOffs,
  chanRefOffs: chanRefOffs,
  raster: raster,
}