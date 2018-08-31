// ltefreq.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ['FDD', 'TDD'],
    bandTabIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

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

    swiperpage: 0,
    itemsFDDswiper: [
      [
        { band: 1, value: 'B1', chanL: 18000, chanH: 18599, freqOffsetDL: 2110.0, freqOffsetUL: 1920.0 },
        { band: 2, value: 'B2', chanL: 18600, chanH: 19199, freqOffsetDL: 1930.0, freqOffsetUL: 1850.0 },
        { band: 3, value: 'B3', chanL: 19200, chanH: 19949, freqOffsetDL: 1805.0, freqOffsetUL: 1710.0 },
        { band: 4, value: 'B4', chanL: 19950, chanH: 20399, freqOffsetDL: 2110.0, freqOffsetUL: 1710.0 },
        { band: 5, value: 'B5', chanL: 20400, chanH: 20649, freqOffsetDL: 869.0, freqOffsetUL: 824.0 },
        { band: 6, value: 'B6', chanL: 20650, chanH: 20749, freqOffsetDL: 875.0, freqOffsetUL: 830.0 },
        { band: 7, value: 'B7', chanL: 20750, chanH: 21449, freqOffsetDL: 2620.0, freqOffsetUL: 2500.0 },
        { band: 8, value: 'B8', chanL: 21450, chanH: 21799, freqOffsetDL: 925.0, freqOffsetUL: 880.0 },
        { band: 9, value: 'B9', chanL: 21800, chanH: 22149, freqOffsetDL: 1844.9, freqOffsetUL: 1749.9 },
        { band: 10, value: 'B10', chanL: 22150, chanH: 22749, freqOffsetDL: 2110.9, freqOffsetUL: 1710.9 },
        { band: 11, value: 'B11', chanL: 22750, chanH: 22949, freqOffsetDL: 1475.9, freqOffsetUL: 1427.9 },

        { band: 12, value: 'B12', chanL: 23010, chanH: 23179, freqOffsetDL: 729.0, freqOffsetUL: 699.0 },
        { band: 13, value: 'B13', chanL: 23180, chanH: 23279, freqOffsetDL: 746.0, freqOffsetUL: 777.0 },
        { band: 14, value: 'B14', chanL: 23280, chanH: 23379, freqOffsetDL: 758.0, freqOffsetUL: 788.0 },  // ????

        { band: 17, value: 'B17', chanL: 23730, chanH: 23849, freqOffsetDL: 734.0, freqOffsetUL: 704.0 },

        { band: 18, value: 'B18', chanL: 23850, chanH: 23999, freqOffsetDL: 860.0, freqOffsetUL: 815.0 },
        { band: 19, value: 'B19', chanL: 24000, chanH: 24149, freqOffsetDL: 875.0, freqOffsetUL: 830.0 },
        { band: 20, value: 'B20', chanL: 24150, chanH: 24449, freqOffsetDL: 791.0, freqOffsetUL: 832.0 },  // ????
        { band: 21, value: 'B21', chanL: 24450, chanH: 24599, freqOffsetDL: 1495.9, freqOffsetUL: 1447.9 },
        { band: 22, value: 'B22', chanL: 24600, chanH: 25399, freqOffsetDL: 3510.0, freqOffsetUL: 3410.0 },
      ],
      [
        { band: 23, value: 'B23', chanL: 25500, chanH: 25699, freqOffsetDL: 2180.0, freqOffsetUL: 2000.0 },
        { band: 24, value: 'B24', chanL: 25700, chanH: 26039, freqOffsetDL: 1525.0, freqOffsetUL: 1626.5 },
        { band: 25, value: 'B25', chanL: 26040, chanH: 26689, freqOffsetDL: 1930.0, freqOffsetUL: 1850.0 },
        { band: 26, value: 'B26', chanL: 26690, chanH: 27039, freqOffsetDL: 859.0, freqOffsetUL: 814.0 },
        { band: 27, value: 'B27', chanL: 27040, chanH: 27209, freqOffsetDL: 852.0, freqOffsetUL: 807.0 },
        { band: 28, value: 'B28', chanL: 27210, chanH: 27659, freqOffsetDL: 758.0, freqOffsetUL: 703.0 },

        { band: 29, value: 'B29', chanL: 9660, chanH: 9769, freqOffsetDL: 717.0, freqOffsetUL: 717.0 },   // DL only
        { band: 30, value: 'B30', chanL: 27660, chanH: 27759, freqOffsetDL: 2350.0, freqOffsetUL: 2305.0 },
        { band: 31, value: 'B31', chanL: 27760, chanH: 27809, freqOffsetDL: 462.5, freqOffsetUL: 452.5 },
        { band: 32, value: 'B32', chanL: 9920, chanH: 10359, freqOffsetDL: 1452.0, freqOffsetUL: 1452.0 },   // DL only
        { band: 65, value: 'B65', chanL: 65536, chanH: 66435, freqOffsetDL: 2110.0, freqOffsetUL: 1920.0 },
        { band: 66, value: 'B66', chanL: 66436, chanH: 67335, freqOffsetDL: 2110.0, freqOffsetUL: 1710.0 },

        { band: 67, value: 'B67', chanL: 67336, chanH: 67535, freqOffsetDL: 738.0, freqOffsetUL: 738.0 },   // DL only
        { band: 68, value: 'B68', chanL: 67536, chanH: 67835, freqOffsetDL: 753.0, freqOffsetUL: 698.0 },
        { band: 69, value: 'B69', chanL: 67836, chanH: 68335, freqOffsetDL: 2570.0, freqOffsetUL: 2570.0 }, // DL only
        { band: 70, value: 'B70', chanL: 68336, chanH: 68585, freqOffsetDL: 1995.0, freqOffsetUL: 1695.0 },
        { band: 71, value: 'B71', chanL: 68586, chanH: 68935, freqOffsetDL: 617.0, freqOffsetUL: 663.0 },
        { band: 72, value: 'B72', chanL: 68936, chanH: 68985, freqOffsetDL: 461.0, freqOffsetUL: 451.0 },
        { band: 74, value: 'B74', chanL: 69036, chanH: 69465, freqOffsetDL: 1475.0, freqOffsetUL: 1427.0 },
        { band: 75, value: 'B75', chanL: 69466, chanH: 70315, freqOffsetDL: 1432.0, freqOffsetUL: 1432.0 }, // DL only
      ],
      [
        { band: 76, value: 'B76', chanL: 70316, chanH: 70365, freqOffsetDL: 1427.0, freqOffsetUL: 1427.0 }, // DL only
        { band: 252, value: 'B252', chanL: 255144, chanH: 256143, freqOffsetDL: 5150.0, freqOffsetUL: 5150.0 }, // DL only
        { band: 255, value: 'B255', chanL: 260894, chanH: 262143, freqOffsetDL: 5725.0, freqOffsetUL: 5725.0 }, // DL only

      ]
    ],
    itemsTDD: [
      { band: 33, value: 'B33', chanL: 36000, chanH: 36199, freqOffsetDL: 1900.0, freqOffsetUL: 1900.0 },
      { band: 34, value: 'B34', chanL: 36200, chanH: 36349, freqOffsetDL: 2010.0, freqOffsetUL: 2010.0 },
      { band: 35, value: 'B35', chanL: 36350, chanH: 36949, freqOffsetDL: 1850.0, freqOffsetUL: 1850.0 },
      { band: 36, value: 'B36', chanL: 36950, chanH: 37549, freqOffsetDL: 1930.0, freqOffsetUL: 1930.0 },
      { band: 37, value: 'B37', chanL: 37550, chanH: 37749, freqOffsetDL: 1910.0, freqOffsetUL: 1910.0 },
      { band: 38, value: 'B38', chanL: 37750, chanH: 38249, freqOffsetDL: 2570.0, freqOffsetUL: 2570.0 },
      { band: 39, value: 'B39', chanL: 38250, chanH: 38649, freqOffsetDL: 1880.0, freqOffsetUL: 1880.0 },
      { band: 40, value: 'B40', chanL: 38650, chanH: 39649, freqOffsetDL: 2300.0, freqOffsetUL: 2300.0 },
      { band: 41, value: 'B41', chanL: 39650, chanH: 41589, freqOffsetDL: 2496.0, freqOffsetUL: 2496.0 },
      { band: 42, value: 'B42', chanL: 41590, chanH: 43589, freqOffsetDL: 3400.0, freqOffsetUL: 3400.0 },
      { band: 43, value: 'B43', chanL: 43590, chanH: 45589, freqOffsetDL: 3600.0, freqOffsetUL: 3600.0 },
      { band: 44, value: 'B44', chanL: 45590, chanH: 46589, freqOffsetDL: 703.0, freqOffsetUL: 703.0 },
      { band: 45, value: 'B45', chanL: 46590, chanH: 46789, freqOffsetDL: 1447.0, freqOffsetUL: 1447.0 },
      { band: 46, value: 'B46', chanL: 46790, chanH: 54539, freqOffsetDL: 5150.0, freqOffsetUL: 5150.0 },
      { band: 47, value: 'B47', chanL: 54540, chanH: 55239, freqOffsetDL: 5855.0, freqOffsetUL: 5855.0 },
      { band: 48, value: 'B48', chanL: 55240, chanH: 56739, freqOffsetDL: 3550.0, freqOffsetUL: 3550.0 },
      { band: 50, value: 'B50', chanL: 58240, chanH: 59089, freqOffsetDL: 1432.0, freqOffsetUL: 1432.0 },
      { band: 51, value: 'B51', chanL: 59090, chanH: 59139, freqOffsetDL: 1427.0, freqOffsetUL: 1427.0 },
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
  selectBandInternal: function(index, bandTabIndex) {
    //var item
    if (bandTabIndex == 1) {
      var item = this.data.itemsTDD[index]
    } else {
      var item = this.data.itemsFDDswiper[this.data.swiperpage][index]
    }
    this.setData({
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
    this.setData({
      index: index
    })
    this.selectBandInternal(this.data.index, this.data.bandTabIndex)
  },
  calculateFreq: function () {
    if (this.data.channel < this.data.chanL || this.data.channel > this.data.chanH)
    {
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
      if (this.data.bandTabIndex == 0) {
        this.setData({
          freqDL: (this.data.channel - this.data.chanL) * 0.1 + this.data.freqOffsetDL,
          freqUL: (this.data.channel - this.data.chanL) * 0.1 + this.data.freqOffsetUL
        })
      } else {
        this.setData({
          freqDL: (this.data.channel - this.data.chanL) * 0.1 + this.data.freqOffsetDL,
          freqUL: (this.data.channel - this.data.chanL) * 0.1 + this.data.freqOffsetDL
        })
      }

      this.setData({
        textFreqDL: this.data.freqDL.toFixed(1),
        textFreqUL: this.data.freqUL.toFixed(1),
      })
    }
  },
  navbarClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      bandTabIndex: e.currentTarget.id
    });
  },
  fddSwiper: function (e) {
    console.log(e)
    this.setData({
      swiperpage: e.detail.current
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
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
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