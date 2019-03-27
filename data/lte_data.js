var bandList = {
  itemsFDDswiper : [
    [
      {
        band: 1, name: 'B1', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["0-599"], chanBegins: [0], chanEnds: [599], freqBase: [2100], },
        UL: { chanRange: ["18000-18599"], chanBegins: [18000], chanEnds: [18599], freqBase: [1920], },
      }, {
        band: 2, name: 'B2', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["600-1199"], chanBegins: [600], chanEnds: [1199], freqBase: [1930], },
        UL: { chanRange: ["18600-19199"], chanBegins: [18600], chanEnds: [19199], freqBase: [1850], },
      }, {
        band: 3, name: 'B3', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["1200-1949"], chanBegins: [1200], chanEnds: [1949], freqBase: [1805], },
        UL: { chanRange: ["19200-19949"], chanBegins: [19200], chanEnds: [19949], freqBase: [1710], },
      }, {
        band: 4, name: 'B4', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["1950-2399"], chanBegins: [1950], chanEnds: [2399], freqBase: [2110], },
        UL: { chanRange: ["19950-20399"], chanBegins: [19950], chanEnds: [20399], freqBase: [1710], },
      }, {
        band: 5, name: 'B5', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10],
        DL: { chanRange: ["2400-2649"], chanBegins: [2400], chanEnds: [2649], freqBase: [869], },
        UL: { chanRange: ["20400-20649"], chanBegins: [20400], chanEnds: [20649], freqBase: [824], },
      }, {
        band: 6, name: 'B6', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["2650-2749"], chanBegins: [2650], chanEnds: [2749], freqBase: [875], },
        UL: { chanRange: ["20650-20749"], chanBegins: [20650], chanEnds: [20749], freqBase: [830], },
      }, {
        band: 7, name: 'B7', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["2750-3449"], chanBegins: [2750], chanEnds: [3449], freqBase: [2620], },
        UL: { chanRange: ["20750-21449"], chanBegins: [20750], chanEnds: [21449], freqBase: [2500], },
      }, {
        band: 8, name: 'B8', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10],
        DL: { chanRange: ["3450-3799"], chanBegins: [3450], chanEnds: [3799], freqBase: [925], },
        UL: { chanRange: ["21450-21799"], chanBegins: [21450], chanEnds: [21799], freqBase: [880], },
      }, {
        band: 9, name: 'B9', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["3800-4149"], chanBegins: [3800], chanEnds: [4149], freqBase: [1844.9], },
        UL: { chanRange: ["21800-22149"], chanBegins: [21800], chanEnds: [22149], freqBase: [1749.9], },
      }, {
        band: 10, name: 'B10', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["4150-4749"], chanBegins: [4150], chanEnds: [4749], freqBase: [2110], },
        UL: { chanRange: ["22150-22749"], chanBegins: [22150], chanEnds: [22749], freqBase: [1710], },
      }, {
        band: 11, name: 'B11', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["4750-4949"], chanBegins: [4750], chanEnds: [4949], freqBase: [1475.9], },
        UL: { chanRange: ["22750-22949"], chanBegins: [22750], chanEnds: [22949], freqBase: [1427.9], },
      }, {
        band: 12, name: 'B12', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10],
        DL: { chanRange: ["5010-5179"], chanBegins: [5010], chanEnds: [5179], freqBase: [729], },
        UL: { chanRange: ["23010-23179"], chanBegins: [23010], chanEnds: [23179], freqBase: [699], },
      }, {
        band: 13, name: 'B13', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["5180-5279"], chanBegins: [5180], chanEnds: [5279], freqBase: [746], },
        UL: { chanRange: ["23180-23279"], chanBegins: [23180], chanEnds: [23279], freqBase: [777], },
      }, {
        band: 14, name: 'B14', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["5280-5379"], chanBegins: [5280], chanEnds: [5379], freqBase: [758], },
        UL: { chanRange: ["23280-23379"], chanBegins: [23280], chanEnds: [23379], freqBase: [788], },
      }, {
        band: 17, name: 'B17', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["5730-5849"], chanBegins: [5730], chanEnds: [5849], freqBase: [734], },
        UL: { chanRange: ["23730-23849"], chanBegins: [23730], chanEnds: [23849], freqBase: [704], },
      },
    ],
    [
      {
        band: 18, name: 'B18', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15],
        DL: { chanRange: ["5850-5999"], chanBegins: [5850], chanEnds: [5999], freqBase: [860], },
        UL: { chanRange: ["23859-23999"], chanBegins: [23859], chanEnds: [23999], freqBase: [815], },
      }, {
        band: 19, name: 'B19', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15],
        DL: { chanRange: ["6000-6149"], chanBegins: [6000], chanEnds: [6149], freqBase: [875], },
        UL: { chanRange: ["24000-24149"], chanBegins: [24000], chanEnds: [24149], freqBase: [830], },
      }, {
        band: 20, name: 'B20', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["6150-6449"], chanBegins: [6150], chanEnds: [6449], freqBase: [791], },
        UL: { chanRange: ["24150-24449"], chanBegins: [24150], chanEnds: [24449], freqBase: [832], },
      }, {
        band: 21, name: 'B21', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15],
        DL: { chanRange: ["6450-6599"], chanBegins: [6450], chanEnds: [6599], freqBase: [1495.9], },
        UL: { chanRange: ["24450-24599"], chanBegins: [24450], chanEnds: [24599], freqBase: [1447.9], },
      }, {
        band: 22, name: 'B22', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["6600-7399"], chanBegins: [6600], chanEnds: [7399], freqBase: [3510], },
        UL: { chanRange: ["24600-25399"], chanBegins: [24600], chanEnds: [25399], freqBase: [3410], },
      }, {
        band: 23, name: 'B23', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["7500-7688"], chanBegins: [7500], chanEnds: [7688], freqBase: [2180], },
        UL: { chanRange: ["25500-25699"], chanBegins: [25500], chanEnds: [25699], freqBase: [2000], },
      }, {
        band: 24, name: 'B24', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["7700-8039"], chanBegins: [7700], chanEnds: [8039], freqBase: [1525], },
        UL: { chanRange: ["25700-26039"], chanBegins: [25700], chanEnds: [26039], freqBase: [1626.5], },
      }, {
        band: 25, name: 'B25', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["8040-8689"], chanBegins: [8040], chanEnds: [8689], freqBase: [1930], },
        UL: { chanRange: ["26040-26689"], chanBegins: [26040], chanEnds: [26689], freqBase: [1850], },
      }, {
        band: 26, name: 'B26', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15],
        DL: { chanRange: ["8690-9039"], chanBegins: [8690], chanEnds: [9039], freqBase: [859], },
        UL: { chanRange: ["26690-27039"], chanBegins: [26690], chanEnds: [27039], freqBase: [814], },
      }, {
        band: 27, name: 'B27', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10],
        DL: { chanRange: ["9040-9209"], chanBegins: [9040], chanEnds: [9209], freqBase: [852], },
        UL: { chanRange: ["27040-27209"], chanBegins: [27040], chanEnds: [27209], freqBase: [807], },
      }, {
        band: 28, name: 'B28', type: 'default', spacing: 0.1, bandwidths: [3, 5, 10, 15, 20],
        DL: { chanRange: ["9210-9659"], chanBegins: [9210], chanEnds: [9659], freqBase: [758], },
        UL: { chanRange: ["27210-27659"], chanBegins: [27210], chanEnds: [27659], freqBase: [703], },
      }, {
        band: 29, name: 'B29', type: 'DL', spacing: 0.1, bandwidths: [3, 5, 10],
        DL: { chanRange: ["9660-9769"], chanBegins: [9660], chanEnds: [9769], freqBase: [717], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 30, name: 'B30', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["9770-9869"], chanBegins: [9770], chanEnds: [9869], freqBase: [2350], },
        UL: { chanRange: ["27660-27759"], chanBegins: [27660], chanEnds: [27759], freqBase: [2305], },
      }, {
        band: 31, name: 'B31', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5],
        DL: { chanRange: ["9870-9919"], chanBegins: [9870], chanEnds: [9919], freqBase: [462.5], },
        UL: { chanRange: ["27760-27809"], chanBegins: [27760], chanEnds: [27809], freqBase: [452.5], },
      }, {
        band: 32, name: 'B32', type: 'DL', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["9920-10359"], chanBegins: [9920], chanEnds: [10359], freqBase: [1452], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      },
    ],
    [
      {
        band: 65, name: 'B65', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["65536-66435"], chanBegins: [65536], chanEnds: [66435], freqBase: [2110], },
        UL: { chanRange: ["131072-131971"], chanBegins: [131072], chanEnds: [131971], freqBase: [1920], },
      }, {
        band: 66, name: 'B66', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["66436-67335"], chanBegins: [66436], chanEnds: [67335], freqBase: [2110], },
        UL: { chanRange: ["131972-132671"], chanBegins: [131972], chanEnds: [132671], freqBase: [1710], },
      }, {
        band: 67, name: 'B67', type: 'DL', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["67336-67535"], chanBegins: [67336], chanEnds: [67535], freqBase: [738], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 68, name: 'B68', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15],
        DL: { chanRange: ["67536-67835"], chanBegins: [67536], chanEnds: [67835], freqBase: [753], },
        UL: { chanRange: ["132672-132971"], chanBegins: [132672], chanEnds: [132971], freqBase: [698], },
      }, {
        band: 69, name: 'B69', type: 'DL', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["67836-68335"], chanBegins: [67836], chanEnds: [68335], freqBase: [2570], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 70, name: 'B70', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["68336-68585"], chanBegins: [68336], chanEnds: [68585], freqBase: [1995], },
        UL: { chanRange: ["132972-133121"], chanBegins: [132972], chanEnds: [133121], freqBase: [1695], },
      }, {
        band: 71, name: 'B71', type: 'default', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["68586-68935"], chanBegins: [68586], chanEnds: [68935], freqBase: [617], },
        UL: { chanRange: ["133122-133471"], chanBegins: [133122], chanEnds: [133471], freqBase: [663], },
      }, {
        band: 72, name: 'B72', type: 'default', spacing: 0.1, bandwidths: [5],
        DL: { chanRange: ["68936-68985"], chanBegins: [68936], chanEnds: [68985], freqBase: [461], },
        UL: { chanRange: ["133472-133521"], chanBegins: [133472], chanEnds: [133521], freqBase: [451], },
      }, {
        band: 73, name: 'B73', type: 'default', spacing: 0.1, bandwidths: [5],
        DL: { chanRange: ["68986-69035"], chanBegins: [68986], chanEnds: [69035], freqBase: [460], },
        UL: { chanRange: ["133522-133571"], chanBegins: [133522], chanEnds: [133571], freqBase: [450], },
      }, {
        band: 74, name: 'B74', type: 'default', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
        DL: { chanRange: ["69036-69465"], chanBegins: [69036], chanEnds: [69465], freqBase: [1475], },
        UL: { chanRange: ["133572-134001"], chanBegins: [133572], chanEnds: [134001], freqBase: [1427], },
      }, {
        band: 75, name: 'B75', type: 'DL', spacing: 0.1, bandwidths: [5, 10, 15, 20],
        DL: { chanRange: ["69466-70315"], chanBegins: [69466], chanEnds: [70315], freqBase: [1432], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 76, name: 'B76', type: 'DL', spacing: 0.1, bandwidths: [5],
        DL: { chanRange: ["70316-70365"], chanBegins: [70316], chanEnds: [70365], freqBase: [1427], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 85, name: 'B85', type: 'default', spacing: 0.1, bandwidths: [5, 10],
        DL: { chanRange: ["70366-70545"], chanBegins: [70366], chanEnds: [70545], freqBase: [728], },
        UL: { chanRange: ["134002-134181"], chanBegins: [134002], chanEnds: [134181], freqBase: [698], },
      }, {
        band: 252, name: 'B252', type: 'DL', spacing: 0.1, bandwidths: [20],
        DL: { chanRange: ["255144-256143"], chanBegins: [255144], chanEnds: [256143], freqBase: [5150], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 255, name: 'B255', type: 'DL', spacing: 0.1, bandwidths: [20],
        DL: { chanRange: ["261519-262143"], chanBegins: [261519], chanEnds: [262143], freqBase: [5725], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      },
    ]
  ],
  itemsTDD : [
    {
      band: 33, name: 'B33', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["36000-36199"], chanBegins: [36000], chanEnds: [36199], freqBase: [1900], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 34, name: 'B34', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15],
      DL: { chanRange: ["36200-36349"], chanBegins: [36200], chanEnds: [36349], freqBase: [2010], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 35, name: 'B35', type: 'tdd', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
      DL: { chanRange: ["36350-36949"], chanBegins: [36350], chanEnds: [36949], freqBase: [1850], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 36, name: 'B36', type: 'tdd', spacing: 0.1, bandwidths: [1.4, 3, 5, 10, 15, 20],
      DL: { chanRange: ["36950-37549"], chanBegins: [36950], chanEnds: [37549], freqBase: [1930], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 37, name: 'B37', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["37550-37749"], chanBegins: [37550], chanEnds: [37749], freqBase: [1910], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 38, name: 'B38', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["37750-38249"], chanBegins: [37750], chanEnds: [38249], freqBase: [2570], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 39, name: 'B39', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["38250-38649"], chanBegins: [38250], chanEnds: [38649], freqBase: [1880], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 40, name: 'B40', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["38650-39649"], chanBegins: [38650], chanEnds: [39649], freqBase: [2300], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 41, name: 'B41', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["39650-41589"], chanBegins: [39650], chanEnds: [41589], freqBase: [2496], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 42, name: 'B42', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["41590-43589"], chanBegins: [41590], chanEnds: [43589], freqBase: [3400], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 43, name: 'B43', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["43590-45589"], chanBegins: [43590], chanEnds: [45589], freqBase: [3600], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 44, name: 'B44', type: 'tdd', spacing: 0.1, bandwidths: [3, 5, 10, 15, 20],
      DL: { chanRange: ["45590-46589"], chanBegins: [45590], chanEnds: [46589], freqBase: [703], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 45, name: 'B45', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["46590-46789"], chanBegins: [46590], chanEnds: [46789], freqBase: [1447], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 46, name: 'B46', type: 'tdd', spacing: 0.1, bandwidths: [10, 20],
      DL: { chanRange: ["46790-54539"], chanBegins: [46790], chanEnds: [54539], freqBase: [5150], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 47, name: 'B47', type: 'tdd', spacing: 0.1, bandwidths: [10, 20],
      DL: { chanRange: ["54540-55239"], chanBegins: [54540], chanEnds: [55239], freqBase: [5855], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 48, name: 'B48', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["55240-56739"], chanBegins: [55240], chanEnds: [56739], freqBase: [3550], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 49, name: 'B49', type: 'tdd', spacing: 0.1, bandwidths: [10, 20],
      DL: { chanRange: ["56740-58239"], chanBegins: [56740], chanEnds: [58239], freqBase: [3550], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 50, name: 'B50', type: 'tdd', spacing: 0.1, bandwidths: [3, 5, 10, 15, 20],
      DL: { chanRange: ["58240-59089"], chanBegins: [58240], chanEnds: [59089], freqBase: [1432], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 51, name: 'B51', type: 'tdd', spacing: 0.1, bandwidths: [5],
      DL: { chanRange: ["59090-59139"], chanBegins: [59090], chanEnds: [59139], freqBase: [1427], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    }, {
      band: 52, name: 'B52', type: 'tdd', spacing: 0.1, bandwidths: [5, 10, 15, 20],
      DL: { chanRange: ["59140-60139"], chanBegins: [59140], chanEnds: [60139], freqBase: [3300], },
      UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
    },
  ]
}

module.exports = {
  bandList: bandList
}