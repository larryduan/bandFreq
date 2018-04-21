// tdsfreq.js
var arfcnBandRange = ["10054 - 10121", "9404 – 9596", "11504 - 11996"]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    band: 34,
    channel: 10054,
    chanPrompt: null,
    arfcnRange: "",
    freqUL: null,
    textFreqUL: "",
    tdsb34color: null,
    tdsb39color: null,
    tdsb40color: null
  },
  //事件处理函数
  toggleB34: function () {
    this.setData({
      band: 34,
      chanPrompt: arfcnBandRange[0],
      arfcnRange: arfcnBandRange[0],
      tdsb34color: "green",
      tdsb39color: null,
      tdsb40color: null
    })
  },
  toggleB39: function () {
    this.setData({
      band: 39,
      chanPrompt: arfcnBandRange[1],
      arfcnRange: arfcnBandRange[1],
      tdsb34color: null,
      tdsb39color: "green",
      tdsb40color: null
    })
  },
  toggleB40: function () {
    this.setData({
      band: 40,
      chanPrompt: arfcnBandRange[2],
      arfcnRange: arfcnBandRange[2],
      tdsb34color: null,
      tdsb39color: null,
      tdsb40color: "green"
    })
  },
  inputChan: function (e) {
    this.setData({
      channel: e.detail.value
    })
  },
  calculateFreq: function () {
    if (this.data.band === 34) {
      if (this.data.channel >= 10054 && this.data.channel <= 10121) {
        this.setData({
          freqUL: (this.data.channel - 10054) * 0.2 + 2010.8
        })
      } else {
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
      }
    } else if (this.data.band === 39) {
      if (this.data.channel >= 9404 && this.data.channel <= 9596) {
        this.setData({
          freqUL: (this.data.channel - 9404) * 0.2 + 1880.8
        })
      } else {
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
      }
    } else if (this.data.band === 40) {
      if (this.data.channel >= 11504 && this.data.channel <= 11996) {
        this.setData({
          freqUL: (this.data.channel - 11504) * 0.2 + 2300.8
        })
      } else {
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
      }
    } else {
      wx.showModal({
        content: '请选择正确的band',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })

      return
    }

    this.setData({
      textFreqUL: this.data.freqUL.toFixed(1),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      band: 34,
      chanPrompt: arfcnBandRange[0],
      arfcnRange: arfcnBandRange[0],
      tdsb34color: "green",
      tdsb39color: null,
      tdsb40color: null
    })
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