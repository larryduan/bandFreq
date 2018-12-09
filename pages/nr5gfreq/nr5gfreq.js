// nr5gfreq.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ['FD', 'TD', 'SD', 'SU'],
    bandTabIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    isSD: false,
    isSU: false,

    index: 0,
    band: 1,
    chanDL: 0,
    chanUL: 0,
    value: 'n1',
    chanPrompt: '',
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",

    itemsFD: [
      {
        band: 1, name: 'n1', type: 'default', spacing: 0.005,
        DL: { chanRange: ["422000-434000"], chanBegins: [422000], chanEnds: [434000], freqBase: [2110], },
        UL: { chanRange: ["384000-396000"], chanBegins: [384000], chanEnds: [396000], freqBase: [1920], },
      }, {
        band: 2, name: 'n2', type: 'default', spacing: 0.005,
        DL: { chanRange: ["386000-398000"], chanBegins: [386000], chanEnds: [398000], freqBase: [1930], },
        UL: { chanRange: ["370000-382000"], chanBegins: [370000], chanEnds: [382000], freqBase: [1850], },
      }, {
        band: 3, name: 'n3', type: 'default', spacing: 0.005,
        DL: { chanRange: ["361000-376000"], chanBegins: [361000], chanEnds: [376000], freqBase: [1805], },
        UL: { chanRange: ["342000-357000"], chanBegins: [342000], chanEnds: [357000], freqBase: [1710], },
      }, {
        band: 5, name: 'n5', type: 'default', spacing: 0.005,
        DL: { chanRange: ["173800-178800"], chanBegins: [173800], chanEnds: [178800], freqBase: [869], },
        UL: { chanRange: ["164800-169800"], chanBegins: [164800], chanEnds: [169800], freqBase: [824], },
      }, {
        band: 7, name: 'n7', type: 'default', spacing: 0.005,
        DL: { chanRange: ["524000-538000"], chanBegins: [524000], chanEnds: [538000], freqBase: [2620], },
        UL: { chanRange: ["500000-514000"], chanBegins: [500000], chanEnds: [514000], freqBase: [2500], },
      }, {
        band: 8, name: 'n8', type: 'default', spacing: 0.005,
        DL: { chanRange: ["185000-192000"], chanBegins: [185000], chanEnds: [192000], freqBase: [925], },
        UL: { chanRange: ["176000-183000"], chanBegins: [176000], chanEnds: [183000], freqBase: [880], },
      }, {
        band: 12, name: 'n12', type: 'default', spacing: 0.005,
        DL: { chanRange: ["145800-149200"], chanBegins: [145800], chanEnds: [149200], freqBase: [729], },
        UL: { chanRange: ["139800-143200"], chanBegins: [139800], chanEnds: [143200], freqBase: [699], },
      }, {
        band: 20, name: 'n20', type: 'default', spacing: 0.005,
        DL: { chanRange: ["158200-164200"], chanBegins: [158200], chanEnds: [164200], freqBase: [791], },
        UL: { chanRange: ["166400-172400"], chanBegins: [166400], chanEnds: [172400], freqBase: [832], },
      }, {
        band: 25, name: 'n25', type: 'default', spacing: 0.005,
        DL: { chanRange: ["386000-399000"], chanBegins: [386000], chanEnds: [399000], freqBase: [1930], },
        UL: { chanRange: ["370000-383000"], chanBegins: [370000], chanEnds: [383000], freqBase: [1850], },
      }, {
        band: 28, name: 'n28', type: 'default', spacing: 0.005,
        DL: { chanRange: ["151600-160600"], chanBegins: [151600], chanEnds: [160600], freqBase: [758], },
        UL: { chanRange: ["140600-149600"], chanBegins: [140600], chanEnds: [149600], freqBase: [703], },
      }, {
        band: 66, name: 'n66', type: 'default', spacing: 0.005,
        DL: { chanRange: ["422000-440000"], chanBegins: [422000], chanEnds: [440000], freqBase: [2110], },
        UL: { chanRange: ["342000-356000"], chanBegins: [342000], chanEnds: [356000], freqBase: [1710], },
      }, {
        band: 70, name: 'n70', type: 'default', spacing: 0.005,
        DL: { chanRange: ["399000-404000"], chanBegins: [399000], chanEnds: [404000], freqBase: [1995], },
        UL: { chanRange: ["339000-342000"], chanBegins: [339000], chanEnds: [342000], freqBase: [1695], },
      }, {
        band: 71, name: 'n71', type: 'default', spacing: 0.005,
        DL: { chanRange: ["123400-130400"], chanBegins: [123400], chanEnds: [130400], freqBase: [617], },
        UL: { chanRange: ["132600-139600"], chanBegins: [132600], chanEnds: [139600], freqBase: [663], },
      }, {
        band: 74, name: 'n74', type: 'default', spacing: 0.005,
        DL: { chanRange: ["295000-303600"], chanBegins: [295000], chanEnds: [303600], freqBase: [1475], },
        UL: { chanRange: ["285400-294000"], chanBegins: [285400], chanEnds: [294000], freqBase: [1427], },
      },
    ],
    itemsTD: [
      {
        band: 34, name: 'n34', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["402000-405000"], chanBegins: [402000], chanEnds: [405000], freqBase: [2010], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 38, name: 'n38', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["514000-524000"], chanBegins: [514000], chanEnds: [524000], freqBase: [2570], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 39, name: 'n39', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["376000-384000"], chanBegins: [376000], chanEnds: [384000], freqBase: [1880], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 40, name: 'n40', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["460000-480000"], chanBegins: [460000], chanEnds: [480000], freqBase: [2300], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 41, name: 'n41', type: 'TD', spacing: 0.015,
        DL: { chanRange: ["499200-537999"], chanBegins: [499200], chanEnds: [537999], freqBase: [2496], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 50, name: 'n50', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["286400-303400"], chanBegins: [286400], chanEnds: [303400], freqBase: [1432], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 51, name: 'n51', type: 'TD', spacing: 0.005,
        DL: { chanRange: ["285400-286400"], chanBegins: [285400], chanEnds: [286400], freqBase: [1427], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 77, name: 'n77', type: 'TD', spacing: 0.015,
        DL: { chanRange: ["620000-680000"], chanBegins: [620000], chanEnds: [680000], freqBase: [3300], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 78, name: 'n78', type: 'TD', spacing: 0.015,
        DL: { chanRange: ["620000-653333"], chanBegins: [620000], chanEnds: [653333], freqBase: [3300], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 79, name: 'n79', type: 'TD', spacing: 0.015,
        DL: { chanRange: ["693334-733333"], chanBegins: [693334], chanEnds: [733333], freqBase: [4400], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      },
    ],
    itemsSD: [
      {
        band: 75, name: 'n75', type: 'SD', spacing: 0.005,
        DL: { chanRange: ["286400-303400"], chanBegins: [286400], chanEnds: [303400], freqBase: [1432], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      }, {
        band: 76, name: 'n76', type: 'SD', spacing: 0.005,
        DL: { chanRange: ["285400-286400"], chanBegins: [285400], chanEnds: [286400], freqBase: [1427], },
        UL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
      },
    ],
    itemsSU: [
      {
        band: 80, name: 'n80', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["342000-357000"], chanBegins: [342000], chanEnds: [357000], freqBase: [1710], },
      }, {
        band: 81, name: 'n81', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["176000-183000"], chanBegins: [176000], chanEnds: [183000], freqBase: [880], },
      }, {
        band: 82, name: 'n82', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["166400-172400"], chanBegins: [166400], chanEnds: [172400], freqBase: [832], },
      }, {
        band: 83, name: 'n83', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["140600-149600"], chanBegins: [140600], chanEnds: [149600], freqBase: [703], },
      }, {
        band: 84, name: 'n84', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["384000-396000"], chanBegins: [384000], chanEnds: [396000], freqBase: [1920], },
      }, {
        band: 86, name: 'n86', type: 'SU', spacing: 0.005,
        DL: { chanRange: [], chanBegins: [], chanEnds: [], freqBase: [], },
        UL: { chanRange: ["342000-356000"], chanBegins: [342000], chanEnds: [356000], freqBase: [1710], },
      },
    ]
  },
  ErrMsg: function (msg) {
    wx.showModal({
      content: msg,
      showCancel: false,
      success: function (res) {
      }
    })
  },
  inputChanDL: function (e) {
    this.setData({
      chanDL: e.detail.value,
      chanUL: -1,
    })
  },
  inputChanUL: function (e) {
    this.setData({
      chanUL: e.detail.value,
      chanDL: -1,
    })
  },
  selectBandInternal: function(index, bandTabIndex) {
    //var item
    if (bandTabIndex == 0) {
      var item = this.data.itemsFD[index]
    } else if (bandTabIndex == 1) {
      var item = this.data.itemsTD[index]
    } else if (bandTabIndex == 2) {
      var item = this.data.itemsSD[index]
    } else if (bandTabIndex == 3) {
      var item = this.data.itemsSU[index]
    }
    this.setData({
      index: index,
      band: item.band,
      chanSpacing: item.spacing,
      DL: item.DL,
      UL: item.UL,
      chanPromptDL: item.DL.chanRange,
      chanPromptUL: item.UL.chanRange,
      textchanUL: "",
      textchanDL: "",
      textFreqDL: "",
      textFreqUL: "",
    })
    if (item.type.indexOf('SD') >=0) {
      this.setData({
        isSD: true
      })
    } else {
      this.setData({
        isSD: false
      })
    }
    if (item.type.indexOf('SU') >= 0) {
      this.setData({
        isSU: true
      })
    } else {
      this.setData({
        isSU: false
      })
    }
  },
  selectBand: function (e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      index: index
    })
    this.selectBandInternal(this.data.index, this.data.bandTabIndex)
  },
  calculateFreq: function () {
    var chanRangeNum = 1
    var chanDL = this.data.chanDL
    var chanUL = this.data.chanUL

    if (chanDL >= 0) {
      chanRangeNum = this.data.DL.chanBegins.length
      for (var i = 0; i < chanRangeNum; i++) {
        if (chanDL >= this.data.DL.chanBegins[i] && chanDL <= this.data.DL.chanEnds[i]) {
          break;
        }
      }
    } else if (chanDL < 0 && chanUL >= 0) {
      chanRangeNum = this.data.UL.chanBegins.length
      for (var i = 0; i < chanRangeNum; i++) {
        if (chanUL >= this.data.UL.chanBegins[i] && chanUL <= this.data.UL.chanEnds[i]) {
          break;
        }
      }
    } else {
      this.ErrMsg('Please input correct channel')
      return
    }

    if (i >= chanRangeNum) {
      this.ErrMsg('Please input correct channel')
      return
    }

    if (chanDL >= 0) {
      chanUL = chanDL - this.data.DL.chanBegins[i] + this.data.UL.chanBegins[i]
    } else if (chanDL < 0 && chanUL >= 0) {
      chanDL = chanUL - this.data.UL.chanBegins[i] + this.data.DL.chanBegins[i]
    }

    if (i >= chanRangeNum) {
      this.ErrMsg('Please input correct channel')
      return
    }

    if (chanDL >= 0) {
      chanUL = chanDL - this.data.DL.chanBegins[i] + this.data.UL.chanBegins[i]
    } else if (chanDL < 0 && chanUL >= 0) {
      chanDL = chanUL - this.data.UL.chanBegins[i] + this.data.DL.chanBegins[i]
    }

    this.setData({
      chanDL: chanDL,
      chanUL: chanUL
    })

    this.setData({
      textchanUL: this.data.chanUL,
      textchanDL: this.data.chanDL,
      freqDL: (chanDL - this.data.DL.chanBegins[i]) * this.data.chanSpacing + this.data.DL.freqBase[i],
      freqUL: (chanUL - this.data.UL.chanBegins[i]) * this.data.chanSpacing + this.data.UL.freqBase[i]
    })

    this.setData({
      textFreqDL: this.data.freqDL.toFixed(3),
      textFreqUL: this.data.freqUL.toFixed(3),
    })
  },
  navbarClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      bandTabIndex: e.currentTarget.id
    })
    this.setData({
      index: 0
    })
    this.selectBandInternal(this.data.index, this.data.bandTabIndex)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: 0
    })
    this.selectBandInternal(this.data.index, 0)

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})