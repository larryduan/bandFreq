// cfreq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    band: 0,
    channel: 0,
    chanL: 0,
    chanH: 0,
    value: 'BC0',
    chanPrompt: '',
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",

    items: [
      //{ band: 0, value: 'BC0', chanL: 1, chanH: 1323, freqOffsetDL: 870.03, freqOffsetUL: 825.03 },
      { band: 1, value: 'BC1', chanL: 0, chanH: 1199, freqOffsetDL: 1930.0, freqOffsetUL: 1850.0 },
      //{ band: 2, value: 'BC2', chanL: 0, chanH: 2108, freqOffsetDL: 917.0125, freqOffsetUL: 872.0125 },
      //{ band: 3, value: 'B3', chanL: 937, chanH: 1288, freqOffsetDL: 1807.4, freqOffsetUL: 1712.4 },
      { band: 4, value: 'BC4', chanL: 0, chanH: 599, freqOffsetDL: 1840, freqOffsetUL: 1750 },
      //{ band: 5, value: 'B5', chanL: 4132, chanH: 4233, freqOffsetDL: 871.4, freqOffsetUL: 826.4 },

      { band: 6, value: 'BC6', chanL: 0, chanH: 1199, freqOffsetDL: 2110.0, freqOffsetUL: 1920.0 },
      { band: 7, value: 'BC7', chanL: 0, chanH: 240, freqOffsetDL: 746.0, freqOffsetUL: 776.0 },
      { band: 8, value: 'BC8', chanL: 0, chanH: 1499, freqOffsetDL: 1805.0, freqOffsetUL: 1710.0 },
      { band: 9, value: 'BC9', chanL: 0, chanH: 699, freqOffsetDL: 925.0, freqOffsetUL: 880.0 },
      { band: 10, value: 'BC10', chanL: 0, chanH: 919, freqOffsetDL: 851.0, freqOffsetUL: 806.0 },

      //{ band: 11, value: 'B11', chanL: 3487, chanH: 3587, freqOffsetDL: 1478.4, freqOffsetUL: 1430.4 },
      { band: 12, value: 'BC12', chanL: 0, chanH: 239, freqOffsetDL: 915.0125, freqOffsetUL: 870.0125 },
      { band: 13, value: 'BC13', chanL: 0, chanH: 1399, freqOffsetDL: 2620.0, freqOffsetUL: 2500.0 },
      { band: 14, value: 'BC14', chanL: 0, chanH: 1299, freqOffsetDL: 1930.0, freqOffsetUL: 1850.0 },
      { band: 15, value: 'BC15', chanL: 0, chanH: 899, freqOffsetDL: 2110.0, freqOffsetUL: 1710.0 },
      { band: 16, value: 'BC16', chanL: 140, chanH: 1459, freqOffsetDL: 2624.0, freqOffsetUL: 2502.0 },
      { band: 17, value: 'BC17', chanL: 140, chanH: 1459, freqOffsetDL: 2624.0, freqOffsetUL: 2624.0 },

      { band: 18, value: 'BC18', chanL: 0, chanH: 240, freqOffsetDL: 757.0, freqOffsetUL: 787.0 },
      { band: 19, value: 'BC19', chanL: 0, chanH: 360, freqOffsetDL: 728.0, freqOffsetUL: 698.0 },

      { band: 20, value: 'BC20', chanL: 0, chanH: 680, freqOffsetDL: 1525.0, freqOffsetUL: 1626.5 },
      { band: 21, value: 'BC21A', chanL: 0, chanH: 200, freqOffsetDL: 2190.0, freqOffsetUL: 2000.0 },
      { band: 22, value: 'BC21B', chanL: 201, chanH: 399, freqOffsetDL: 2180.05, freqOffsetUL: 2010.05 },
    ]
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
  selectBandInternal: function (index) {
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
        freqDL: (this.data.channel - this.data.chanL) * 0.05 + this.data.freqOffsetDL,
        freqUL: (this.data.channel - this.data.chanL) * 0.05 + this.data.freqOffsetUL
      })

      this.setData({
        textFreqDL: this.data.freqDL.toFixed(4),
        textFreqUL: this.data.freqUL.toFixed(4),
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectBandInternal(0)
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