var bandList = [
  {
    band: 0, name: 'BC0', type: 'default', spacing: 0.03,
    DL: { chanRange: ["1-799", "991-323"], chanBegins: [1, 991], chanEnds: [799, 323], freqBase: [870.03, 869.04], },
    UL: { chanRange: ["1-799", "991-323"], chanBegins: [1, 991], chanEnds: [799, 323], freqBase: [825.03, 824.04], },
  }, {
    band: 1, name: 'BC1', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [1930], },
    UL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [1850], },
  }, {
    band: 2, name: 'BC2', type: 'default', spacing: 0.025,
    DL: { chanRange: ["0-1000", "1329-2108"], chanBegins: [0, 1329], chanEnds: [1000, 2108], freqBase: [934.9875, 917.0125], },
    UL: { chanRange: ["0-1000", "1329-2108"], chanBegins: [0, 1329], chanEnds: [1000, 2108], freqBase: [889.9875, 872.0125], },
  }, {
    band: 3, name: 'BC3', type: 'default', spacing: 0.0125,
    DL: { chanRange: ["1-799", "801-1039", "1041-1199", "1201-1600"], chanBegins: [1, 801, 1041, 1201], chanEnds: [799, 1039, 1199, 1600], freqBase: [860.0125, 843.0125, 832.0125, 838.0125], },
    UL: { chanRange: ["1-799", "801-1039", "1041-1199", "1201-1600"], chanBegins: [1, 801, 1041, 1201], chanEnds: [799, 1039, 1199, 1600], freqBase: [915.0125, 898.0125, 887.0125, 893.0125], },
  }, {
    band: 4, name: 'BC4', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-599"], chanBegins: [0], chanEnds: [599], freqBase: [1840], },
    UL: { chanRange: ["0-599"], chanBegins: [0], chanEnds: [599], freqBase: [1750], },
  }, {
    band: 5, name: 'BC5', type: 'default', spacing: [0.025, 0.025, 0.02, 0.025, 0.02],
    DL: { chanRange: ["1-400", "472-871", "1039-1473", "1536-1715", "1792-2016"], chanBegins: [1, 472, 1039, 1536, 1792], chanEnds: [400, 871, 1473, 1715, 2016], freqBase: [460, 420, 461.31, 489, 489], },
    UL: { chanRange: ["1-400", "472-871", "1039-1473", "1536-1715", "1792-2016"], chanBegins: [1, 472, 1039, 1536, 1792], chanEnds: [400, 871, 1473, 1715, 2016], freqBase: [450, 410, 451.31, 479, 479], },
  }, {
    band: 6, name: 'BC6', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [2110], },
    UL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [1920], },
  }, {
    band: 7, name: 'BC7', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-240"], chanBegins: [0], chanEnds: [240], freqBase: [746], },
    UL: { chanRange: ["0-240"], chanBegins: [0], chanEnds: [240], freqBase: [776], },
  }, {
    band: 8, name: 'BC8', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-1499"], chanBegins: [0], chanEnds: [1499], freqBase: [1805], },
    UL: { chanRange: ["0-1499"], chanBegins: [0], chanEnds: [1499], freqBase: [1710], },
  }, {
    band: 9, name: 'BC9', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-699"], chanBegins: [0], chanEnds: [699], freqBase: [925], },
    UL: { chanRange: ["0-699"], chanBegins: [0], chanEnds: [699], freqBase: [880], },
  }, {
    band: 10, name: 'BC10', type: 'default', spacing: 0.025,
    DL: { chanRange: ["0-919"], chanBegins: [0], chanEnds: [919], freqBase: [851], },
    UL: { chanRange: ["0-919"], chanBegins: [0], chanEnds: [919], freqBase: [806], },
  }, {
    band: 11, name: 'BC11', type: 'default', spacing: 0.025,
    DL: { chanRange: ["1-400", "472-871", "1536-1715"], chanBegins: [1, 472, 1536], chanEnds: [400, 871, 1715], freqBase: [460, 420, 489], },
    UL: { chanRange: ["1-400", "472-871", "1536-1715"], chanBegins: [1, 472, 1536], chanEnds: [400, 871, 1715], freqBase: [450, 410, 479], },
  }, {
    band: 12, name: 'BC12', type: 'default', spacing: 0.025,
    DL: { chanRange: ["0-239"], chanBegins: [0], chanEnds: [239], freqBase: [915.0125], },
    UL: { chanRange: ["0-239"], chanBegins: [0], chanEnds: [239], freqBase: [870.0125], },
  }, {
    band: 13, name: 'BC13', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-1399"], chanBegins: [0], chanEnds: [1399], freqBase: [2620], },
    UL: { chanRange: ["0-1399"], chanBegins: [0], chanEnds: [1399], freqBase: [2500], },
  }, {
    band: 14, name: 'BC14', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-1299"], chanBegins: [0], chanEnds: [1299], freqBase: [1930], },
    UL: { chanRange: ["0-1299"], chanBegins: [0], chanEnds: [1299], freqBase: [1850], },
  }, {
    band: 15, name: 'BC15', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-899"], chanBegins: [0], chanEnds: [899], freqBase: [2110], },
    UL: { chanRange: ["0-899"], chanBegins: [0], chanEnds: [899], freqBase: [1710], },
  }, {
    band: 16, name: 'BC16', type: 'default', spacing: 0.05,
    DL: { chanRange: ["140-1459"], chanBegins: [140], chanEnds: [1459], freqBase: [2624], },
    UL: { chanRange: ["140-1459"], chanBegins: [140], chanEnds: [1459], freqBase: [2502], },
  }, {
    band: 17, name: 'BC17', type: 'DL', spacing: 0.05,
    DL: { chanRange: ["140-1459"], chanBegins: [140], chanEnds: [1459], freqBase: [2624], },
    UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
  }, {
    band: 18, name: 'BC18', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-240"], chanBegins: [0], chanEnds: [240], freqBase: [757], },
    UL: { chanRange: ["0-240"], chanBegins: [0], chanEnds: [240], freqBase: [787], },
  }, {
    band: 19, name: 'BC19', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-360"], chanBegins: [0], chanEnds: [360], freqBase: [728], },
    UL: { chanRange: ["0-360"], chanBegins: [0], chanEnds: [360], freqBase: [698], },
  }, {
    band: 20, name: 'BC20', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-680"], chanBegins: [0], chanEnds: [680], freqBase: [1525], },
    UL: { chanRange: ["0-680"], chanBegins: [0], chanEnds: [680], freqBase: [1626.5], },
  }, {
    band: 21, name: 'BC21', type: 'default', spacing: 0.05,
    DL: { chanRange: ["0-200", "201-399"], chanBegins: [0, 201], chanEnds: [200, 399], freqBase: [2190, 2180.05], },
    UL: { chanRange: ["0-200", "201-399"], chanBegins: [0, 201], chanEnds: [200, 399], freqBase: [2000, 2010.05], },
  },
]

module.exports = {
  bandList: bandList
}