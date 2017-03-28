// pages/search/search.js
Page({
  data: {    
    date: '2017-04-01'
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  resultViewTap:function(){
     wx.redirectTo({
      url: '../result/result'
    })
  }
})