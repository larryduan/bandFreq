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
    
    items: [
        { band: 1, value: 'B1', chanL: 9612, chanH: 9888, freqOffsetDL: 2112.4, freqOffsetUL: 1922.4 },
        { band: 2, value: 'B2', chanL: 9262, chanH: 9538, freqOffsetDL: 1932.4, freqOffsetUL: 1852.4 },
        { band: 3, value: 'B3', chanL: 937, chanH: 1288, freqOffsetDL: 1807.4, freqOffsetUL: 1712.4 },
        { band: 4, value: 'B4', chanL: 1312, chanH: 1513, freqOffsetDL: 2112.4, freqOffsetUL: 1712.4 },
        { band: 5, value: 'B5', chanL: 4132, chanH: 4233, freqOffsetDL: 871.4, freqOffsetUL: 826.4 },

        { band: 6, value: 'B6', chanL: 4162, chanH: 4188, freqOffsetDL: 877.4, freqOffsetUL: 832.4 },
        { band: 7, value: 'B7', chanL: 2012, chanH: 2338, freqOffsetDL: 2622.4, freqOffsetUL: 2502.4 },
        { band: 8, value: 'B8', chanL: 2712, chanH: 2863, freqOffsetDL: 927.4, freqOffsetUL: 882.4 },
        { band: 9, value: 'B9', chanL: 8762, chanH: 8912, freqOffsetDL: 1847.4, freqOffsetUL: 1752.4 },
        { band: 10, value: 'B10', chanL: 2887, chanH: 3163, freqOffsetDL: 2112.4, freqOffsetUL: 1712.4 },

        { band: 11, value: 'B11', chanL: 3487, chanH: 3587, freqOffsetDL: 1478.4, freqOffsetUL: 1430.4 },
        { band: 12, value: 'B12', chanL: 3612, chanH: 3678, freqOffsetDL: 730.4, freqOffsetUL: 700.4 },
        { band: 13, value: 'B13', chanL: 3792, chanH: 3818, freqOffsetDL: 748.4, freqOffsetUL: 779.4 },
        { band: 14, value: 'B14', chanL: 3892, chanH: 3918, freqOffsetDL: 760.4, freqOffsetUL: 790.4 },
        { band: 19, value: 'B19', chanL: 312, chanH: 363, freqOffsetDL: 877.4, freqOffsetUL: 832.4 },

        { band: 20, value: 'B20', chanL: 4287, chanH: 4413, freqOffsetDL: 793.4, freqOffsetUL: 834.4 },
        { band: 21, value: 'B21', chanL: 462, chanH: 512, freqOffsetDL: 1498.4, freqOffsetUL: 1450.4 },
        { band: 22, value: 'B22', chanL: 4437, chanH: 4813, freqOffsetDL: 3512.4, freqOffsetUL: 3412.4 },
        { band: 25, value: 'B25', chanL: 4887, chanH: 5188, freqOffsetDL: 1932.4, freqOffsetUL: 1852.4 },
        { band: 26, value: 'B26', chanL: 5537, chanH: 5688, freqOffsetDL: 861.4, freqOffsetUL: 816.4 },
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