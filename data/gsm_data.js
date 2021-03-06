var bandList = [
  {
    band: 5, name: 'GSM 850', type: 'default', spacing: 0.2,
    DL: { chanRange: ["128-251"], chanBegins: [128], chanEnds: [251], freqBase: [869.2], },
    UL: { chanRange: ["128-251"], chanBegins: [128], chanEnds: [251], freqBase: [824.2], },
  }, {
    band: 8, name: 'EGSM 900', type: 'default', spacing: 0.2,
    DL: { chanRange: ["975-1023", "0-124"], chanBegins: [975, 0], chanEnds: [1023, 124], freqBase: [925.2, 935.0], },
    UL: { chanRange: ["975-1023", "0-124"], chanBegins: [975, 0], chanEnds: [1023, 124], freqBase: [880.2, 890.0], },
  }, {
    band: 3, name: 'DCS 1800', type: 'default', spacing: 0.2,
    DL: { chanRange: ["512-885"], chanBegins: [512], chanEnds: [885], freqBase: [1805.2], },
    UL: { chanRange: ["512-885"], chanBegins: [512], chanEnds: [885], freqBase: [1710.2], },
  }, {
    band: 2, name: 'PCS 1900', type: 'default', spacing: 0.2,
    DL: { chanRange: ["512-810"], chanBegins: [512], chanEnds: [810], freqBase: [1930.2], },
    UL: { chanRange: ["512-810"], chanBegins: [512], chanEnds: [810], freqBase: [1850.2], },
  },
]

module.exports = {
  bandList: bandList
}