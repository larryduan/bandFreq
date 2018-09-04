// cfreq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    band: 0,
    chanDL: 1,
    chanUL: 1,
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
        band: 0, name: 'BC0', type: 'default', spacing: 0.03,
        DL: { chanRange: ["1-799", "991-323"], chanBegins: [1, 991], chanEnds: [799, 323], freqBase: [870.03, 869.04], },
        UL: { chanRange: ["1-799", "991-323"], chanBegins: [1, 991], chanEnds: [799, 323], freqBase: [825.03, 824.04], },
      }, {
        band: 1, name: 'BC1', type: 'default', spacing: 0.05,
        DL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [1930], },
        UL: { chanRange: ["0-1199"], chanBegins: [0], chanEnds: [1199], freqBase: [1850], },
      }, {
        band: 2, name: 'BC2', type: 'default', spacing: 0.025,
        DL: { chanRange: ["0-1000", "1329-2108"], chanBegins: [0, 1329], chanEnds: [1000, 2108], freqBase: [934.9875, 917.0125], },
        UL: { chanRange: ["0-1000", "1329-2108"], chanBegins: [0, 1329], chanEnds: [1000, 2108], freqBase: [889.9875, 872.0125], },
      }, {
        band: 3, name: 'BC3', type: 'default', spacing: 0.0125,
        DL: { chanRange: ["1-799", "801-1039", "1041-1199", "1201-1600"], chanBegins: [1, 801, 1041, 1201], chanEnds: [799, 1039, 1199, 1600], freqBase: [860.0125, 843.0125, 832.0125, 838.0125], },
        UL: { chanRange: ["1-799", "801-1039", "1041-1199", "1201-1600"], chanBegins: [1, 801, 1041, 1201], chanEnds: [799, 1039, 1199, 1600], freqBase: [915.0125, 898.0125, 887.0125, 893.0125], },
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
  inputChan: function (e) {
    this.setData({
      chanDL: e.detail.value,
      chanUL: e.detail.value,
    })
  },
  calculateFreq: function () {
    var chanRangeNum = this.data.DL.chanBegins.length
    var chan = this.data.chanDL

    for (var i = 0; i < chanRangeNum; i++) {
      if (chan >= this.data.DL.chanBegins[i] && chan <= this.data.DL.chanEnds[i]) {
        break;
      }
    }

    if (i >= chanRangeNum) {
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
      textFreqDL: this.data.freqDL.toFixed(4),
      textFreqUL: this.data.freqUL.toFixed(4),
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