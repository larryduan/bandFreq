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

    freqRefOffs: null,
    chanRefOffs: null,
    raster: null,
    bandsInfo: null,
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
    var data = require("../../data/nr5gFR2_data.js")
    
    this.setData({
      bandsInfo: data.bandList,
      freqRefOffs: data.freqRefOffs,
      chanRefOffs: data.chanRefOffs,
      raster: data.raster,
    })
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