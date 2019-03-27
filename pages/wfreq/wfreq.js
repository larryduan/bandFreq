// wfreq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    band: 1,
    channel: 0,
    chanL: 0,
    chanH: 0,
    value: 'B1',
    chanPrompt: '',
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",
    
    items: null
  },
  debug: function (msg) {
    //console.log(msg);
    wx.showModal({
      content: msg,
      showCancel: false,
      success: function (res) {
      }
    })
  },
  inputChan: function (e) {
    this.setData({
      channel: e.detail.value
    })
  },
  selectBandInternal: function(index) {
    var item = this.data.items[index]

    this.setData({
      index: index,
      band: item.band,
      chanL: item.chanL,
      chanH: item.chanH,
      freqOffsetDL: item.freqOffsetDL,
      freqOffsetUL: item.freqOffsetUL,
      chanPrompt: "" + item.chanL + "-" + item.chanH
    })
  },
  selectBand: function (e) {
    var index = e.currentTarget.dataset.index

    this.selectBandInternal(index)
  },
  calculateFreq: function () {
    if (this.data.channel < this.data.chanL || this.data.channel > this.data.chanH) {
      wx.showModal({
        content: '请输入正确的channel',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return
    } else {
      this.setData({
        freqDL: (this.data.channel - this.data.chanL) * 0.2 + this.data.freqOffsetDL,
        freqUL: (this.data.channel - this.data.chanL) * 0.2 + this.data.freqOffsetUL
      })

      this.setData({
        textFreqDL: this.data.freqDL.toFixed(1),
        textFreqUL: this.data.freqUL.toFixed(1),
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require("../../data/wcdma_data.js")

    this.setData({
      items: data.bandList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.selectBandInternal(0)
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