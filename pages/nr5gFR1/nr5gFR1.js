// nr5gFR1.js

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

    itemsFD: null,
    itemsTD: null,
    itemsSD: null,
    itemsSU: null
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
    var data = require("../../data/nr5gFR1_data.js")

    this.setData({
      itemsFD: data.bandList.itemsFD,
      itemsTD: data.bandList.itemsTD,
      itemsSD: data.bandList.itemsSD,
      itemsSU: data.bandList.itemsSU
    })

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
    this.setData({
      index: 0
    })
    this.selectBandInternal(this.data.index, 0)
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