// ltefreq.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ['FDD', 'TDD'],
    bandTabIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    isDLOnly: false,

    index: 0,
    band: 1,
    chanDL: 0,
    chanUL: 0,
    chanPrompt: '',
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",
    bandwidths: null,

    swiperpage: 0,
    itemsFDDswiper: null,
    itemsTDD: null
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
    if (bandTabIndex == 1) {
      var item = this.data.itemsTDD[index]
    } else {
      var item = this.data.itemsFDDswiper[this.data.swiperpage][index]
    }
    this.setData({
      index: index,
      band: item.band,
      bandwidths: item.bandwidths,
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
    if (item.type.indexOf('DL') >=0) {
      this.setData({
        isDLOnly: true
      })
    } else {
      this.setData({
        isDLOnly: false
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
    var chanRangeNum = this.data.DL.chanBegins.length
    var chanDL = this.data.chanDL
    var chanUL = this.data.chanUL

    if (chanDL >= 0) {
      for (var i = 0; i < chanRangeNum; i++) {
        if (chanDL >= this.data.DL.chanBegins[i] && chanDL <= this.data.DL.chanEnds[i]) {
          break;
        }
      }
    } else if (chanDL < 0 && chanUL >= 0) {
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
      textFreqDL: this.data.freqDL.toFixed(1),
      textFreqUL: this.data.freqUL.toFixed(1),
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
  fddSwiper: function (e) {
    console.log(e)
    this.setData({
      swiperpage: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require("../../data/lte_data.js")

    this.setData({
      itemsFDDswiper: data.bandList.itemsFDDswiper,
      itemsTDD: data.bandList.itemsTDD
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