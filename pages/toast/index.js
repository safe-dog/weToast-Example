// pages/toast/index.js
const weToast = require('../../libs/weToast/weToast.js');
var toast;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultTitle: '提示标题',
    defaultContent: '这是一条提示信息内容！'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    toast = new weToast(this);
    toast.setDelay(5000);
    toast.success('欢迎使用weToast！') ;
  },

  showSuccess: () => {
    toast.success('不错哦')
  },

  showWarning: () => {
    toast.warning('这是一条警告消息⚠️\n哈哈是否打算\n哈哈哈\n东方拉基舍夫撒地方\n分撒娇阿斯顿发生的', '警告拉到饭卡叫拉风的时代里发酵的饭卡附近的 \n哈哈哈');
  },

  showInfo: () => {
    toast.info('提示消息');
  },
  showError: () => {
    toast.error('错误啦')
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