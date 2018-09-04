// gsmfreq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    band: 850,
    chanDL: 128,
    chanUL: 128,
    textchanUL: "",
    textchanDL: "",
    chanPromptDL: null,
    chanPromptUL: null,    
    DL: null,
    UL: null,
    freqDL: null,
    freqUL: null,
    textFreqDL: "",
    textFreqUL: "",
    chanSpacing: 0,

    items: [
      {
        band: 5, name: 'GSM 850', type: 'default', spacing: 0.2,
        DL: { chanRange: ["128-251"], chanBegins: [128], chanEnds: [251], freqBase: [869.2], },
        UL: { chanRange: ["128-251"], chanBegins: [128], chanEnds: [251], freqBase: [824.2], },
      }, {
        band: 8, name: 'EGSM 900', type: 'default', spacing: 0.2,
        DL: { chanRange: ["975-1023", "0-124"], chanBegins: [975, 0], chanEnds: [1023, 124], freqBase: [925.2, 935.0], },
        UL: { chanRange: ["975-1023", "0-124"], chanBegins: [975, 0], chanEnds: [1023, 124], freqBase: [880.2, 890.0], },
      }, {
        band: 3, name: 'DCS 1800', type: 'default', spacing: 0.2,
        DL: { chanRange: ["512-885"], chanBegins: [512], chanEnds: [885], freqBase: [1805.2], },
        UL: { chanRange: ["512-885"], chanBegins: [512], chanEnds: [885], freqBase: [1710.2], },
      }, {
        band: 2, name: 'PCS 1900', type: 'default', spacing: 0.2,
        DL: { chanRange: ["512-810"], chanBegins: [512], chanEnds: [810], freqBase: [1930.2], },
        UL: { chanRange: ["512-810"], chanBegins: [512], chanEnds: [810], freqBase: [1850.2], },
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
  selectBandInternal: function (index) {
    var item = this.data.items[index]
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
  },
  selectBand: function (e) {
    var index = e.currentTarget.dataset.index
    this.selectBandInternal(index)
  },
  inputChan: function(e) {
    this.setData({
      chanDL: e.detail.value,
      chanUL: e.detail.value,
    })
  },
  calculateFreq: function() {
    var chanRangeNum = this.data.DL.chanBegins.length
    var chan = this.data.chanDL

    for (var i = 0; i < chanRangeNum; i++)
    {
      if (chan >= this.data.DL.chanBegins[i] && chan <= this.data.DL.chanEnds[i])
      {
        break;
      }
    }

    if (i >= chanRangeNum)
    {
      this.ErrMsg('Please input correct channel')
      return
    }

    this.setData({
      textchanUL: this.data.chanUL,
      textchanDL: this.data.chanDL,
      freqDL: (chan - this.data.DL.chanBegins[i]) * this.data.chanSpacing + this.data.DL.freqBase[i],
      freqUL: (chan - this.data.UL.chanBegins[i]) * this.data.chanSpacing + this.data.UL.freqBase[i]
    })
    
    this.setData({
      textFreqDL: this.data.freqDL.toFixed(1),
      textFreqUL: this.data.freqUL.toFixed(1),
    })
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