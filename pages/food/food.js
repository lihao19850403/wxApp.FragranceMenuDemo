// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    windowWidth: 0,
    windowHeight: 0,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
    iconType: ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn', 'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download', 'info_circle', 'cancel', 'search', 'clear']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pageInstance = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        pageInstance.setData({ windowWidth:res.windowWidth });
        pageInstance.setData({ windowHeight:res.windowHeight });
      },
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

  },

  /**
   * 切换标签页。
   */
  switchNav: function(e) {
    var pageInstance = this;
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      pageInstance.setData({ currentTab:e.target.dataset.current });
    }
  },

  /**
   * 当swiper变换了标签页，触发回调。
   */
  onSwiperChanged: function(event) {
    var currentSelectedTab = event.detail.current;
    if (this.data.currentTab == currentSelectedTab) {
      return false;
    } else {
      this.setData({ currentTab: currentSelectedTab });
    }
  }
})