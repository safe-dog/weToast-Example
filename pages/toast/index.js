// pages/toast/index.js
const weToast = require('../../libs/weToast/weToast.js');
var toast;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '提示标题',
    content: '这是一条提示信息内容！',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    toast = new weToast(this);
    toast.setDelay(2000);
    toast.success('欢迎使用weToast！') ;
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
  
  inputTitleHandler: function (e) {
    const { value } = e.detail;
    this.setData({
      title: value
    });
  },
  inputContentHandler: function (e) {
    const { value } = e.detail;
    this.setData({
      content: value
    });
  },
  toastHandler: function (e) {
    const { icon } = e.currentTarget.dataset;
    const { title, content } = this.data;
    toast[icon](content, title);
  }
})