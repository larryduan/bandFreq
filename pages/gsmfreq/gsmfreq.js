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

    items: null,
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
    var data = require("../../data/gsm_data.js")

    this.setData({
      items: data.bandList,
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