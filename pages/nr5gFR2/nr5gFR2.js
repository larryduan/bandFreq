// nr5gFR2.js
Page({
  data: {
    index: 0,
    band: 257,
    chanInfo: null,
    chan: 0,
    value: 'n257',
    chanPrompt: '',
    freq: null,
    textFreq: "",

    freqRefOffs: 24250.080,
    chanRefOffs: 2016667,
    raster: 0.060,
    bandsInfo: [
      {
        band: 257, name: 'n257', 
        chanInfo: { NRange: ["2054166-2104165"], NFirst: [2054166], NLast: [2104165]},
      }, {
        band: 258, name: 'n258', 
        chanInfo: { NRange: ["2016667-2070832"], NFirst: [2016667], NLast: [2070832]},
      }, {
        band: 260, name: 'n260', 
        chanInfo: { NRange: ["2229166-2279165"], NFirst: [2229166], NLast: [2279165]},
      }, {
        band: 261, name: 'n261', 
        chanInfo: { NRange: ["2070833-2084999"], NFirst: [2070833], NLast: [2084999]},
      },
    ],
  },
  ErrMsg: function (msg) {
    wx.showModal({
      content: msg,
      showCancel: false,
      success: function (res) {
      }
    })
  },
  inputChan: function (e) {
    this.setData({
      chan: e.detail.value,
    })
  },
  selectBandInternal: function(index, reserved) {
    var item = this.data.bandsInfo[index]

    this.setData({
      index: index,
      band: item.band,
      chanInfo: item.chanInfo,
      chanPrompt: item.chanInfo.NRange,
      textchan: "",
      textFreq: "",
    })
  },
  selectBand: function (e) {
    this.selectBandInternal(e.currentTarget.dataset.index, 0)
  },
  calculateFreq: function () {
    var chanRangeNum = this.data.chanInfo.NFirst.length
    var chan = this.data.chan

    for (var i = 0; i < chanRangeNum; i++) {
      if (chan >= this.data.chanInfo.NFirst[i] && chan <= this.data.chanInfo.NLast[i]) {
        break;
      }
    }

    if (i >= chanRangeNum) {
      this.ErrMsg('Please input correct channel')
      return
    }

    this.setData({
      textchan: this.data.chan,
      freq: (chan - this.data.chanRefOffs) * this.data.raster + this.data.freqRefOffs
    })

    this.setData({
      textFreq: this.data.freq.toFixed(3),
    })
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