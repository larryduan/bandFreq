// gsmfreq.js
var arfcnBandRange = ["128 - 251", "975 – 1023, 0 - 124", "512 - 885", "512 - 810"]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    band: 850,
    channel: 128,
    chanPrompt: null,
    arfcnRange: "",
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",
    gsm850color: null,
    gsm900color: null,
    gsm1800color: null,
    gsm1900color: null
  },
  //事件处理函数
  toggle850: function () {
    this.setData({
      band: 850,
      chanPrompt: arfcnBandRange[0],
      arfcnRange: arfcnBandRange[0],
      gsm850color: "green",
      gsm900color: null,
      gsm1800color: null,
      gsm1900color: null
    })
  },
  toggle900: function () {
    this.setData({
      band: 900,
      chanPrompt: arfcnBandRange[1],
      arfcnRange: arfcnBandRange[1],
      gsm850color: null,
      gsm900color: "green",
      gsm1800color: null,
      gsm1900color: null
    })
  },
  toggle1800: function () {
    this.setData({
      band: 1800,
      chanPrompt: arfcnBandRange[2],
      arfcnRange: arfcnBandRange[2],
      gsm850color: null,
      gsm900color: null,
      gsm1800color: "green",
      gsm1900color: null
    })
  },
  toggle1900: function () {
    this.setData({
      band: 1900,
      chanPrompt: arfcnBandRange[3],
      arfcnRange: arfcnBandRange[3],
      gsm850color: null,
      gsm900color: null,
      gsm1800color: null,
      gsm1900color: "green"
    })
  },
  inputChan: function(e) {
    this.setData({
      channel: e.detail.value
    })
  },
  calculateFreq: function() {
    if (this.data.band === 850) {
      if (this.data.channel >= 128 && this.data.channel <= 251) {
        this.setData({
          freqDL: (this.data.channel - 128) * 0.2 + 869.2,
          freqUL: (this.data.channel - 128) * 0.2 + 824.2
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
    } else if (this.data.band === 900) {
      if (this.data.channel >= 0 && this.data.channel <= 124) {
        this.setData({
          freqDL: (this.data.channel - 0) * 0.2 + 935,
          freqUL: (this.data.channel - 0) * 0.2 + 890
        })
      } else if (this.data.channel >= 975 && this.data.channel <= 1024) {
        this.setData({
          freqDL: (this.data.channel - 975) * 0.2 + 925,
          freqUL: (this.data.channel - 975) * 0.2 + 880
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
    } else if (this.data.band === 1800) {
      if (this.data.channel >= 512 && this.data.channel <= 885) {
        this.setData({
          freqDL: (this.data.channel - 512) * 0.2 + 1805.2,
          freqUL: (this.data.channel - 512) * 0.2 + 1710.2
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
    } else if (this.data.band === 1900) {
      if (this.data.channel >= 512 && this.data.channel <= 885) {
        this.setData({
          freqDL: (this.data.channel - 512) * 0.2 + 1930.2,
          freqUL: (this.data.channel - 512) * 0.2 + 1850.2
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
      textFreqDL: this.data.freqDL.toFixed(1),
      textFreqUL: this.data.freqUL.toFixed(1),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      band: 850,
      chanPrompt: arfcnBandRange[0],
      arfcnRange: arfcnBandRange[0],
      gsm850color: "green",
      gsm900color: null,
      gsm1800color: null,
      gsm1900color: null
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