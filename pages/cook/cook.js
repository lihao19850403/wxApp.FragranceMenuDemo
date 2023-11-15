// pages/cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [], // 通过initData函数手动设置值。
    banner: {
      indicatorDots: true,
      autoPlay: true,
      interval:3000,
      duration:1000,
      circular: true, // 其实就是循环滚动。
      imgUrls:[
        "../../images/banner/main_banner_demo.png",
        "../../images/banner/main_banner_demo2.png",
        "../../images/banner/main_banner_demo3.png",
        "../../images/banner/main_banner_demo4.png",
        "../../images/banner/main_banner_demo5.png"
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrayData = this.initData();
    this.setData({array:arrayData});
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
   * 初始化array数据。
   */
  initData: function() {
    var array = [];
    
    var object1 = new Object();
    object1.img = '../../images/news/icon_news_1.png';
    object1.title = '爱心早餐';
    object1.type = '健康养生';
    object1.browse = '20696浏览';
    object1.commit = '7评论';
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../../images/news/icon_news_2.png';
    object2.title = '困了只想喝咖啡';
    object2.type = '家庭医生在线';
    object2.browse = '29628浏览';
    object2.commit = '13评论';
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../../images/news/icon_news_3.png';
    object3.title = '橘子吃多了变小黄人';
    object3.type = '家庭医生在线';
    object3.browse = '19585浏览';
    object3.commit = '6评论';
    array[2] = object3;

    var object4 = new Object();
    object4.img = '../../images/news/icon_news_4.png';
    object4.title = '搜狐新闻，手机用久了';
    object4.type = '广告';
    object4.browse = '4688浏览';
    object4.commit = '4评论';
    array[3] = object4;

    var object5 = new Object();
    object5.img = '../../images/news/icon_news_5.png';
    object5.title = '困了只想喝咖啡2';
    object5.type = '家庭医生在线';
    object5.browse = '29628浏览';
    object5.commit = '13评论';
    array[4] = object5;

    return array;
  }
})