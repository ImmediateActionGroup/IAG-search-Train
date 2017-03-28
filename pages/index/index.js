//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: app.pageconf.logs
    })
  },
  searchViewTap: function () {
    wx.navigateTo({
      url: app.pageconf.search
    })
  },
  // resultViewTap:function(){
  //   wx.navigateTo({
  //     url: app.pageconf.result
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShow: function () {
    console.log('onShow');
    console.log(app.pageconf);
  }
})
