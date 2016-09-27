//index.js
//获取应用实例
var app = getApp()
Page({
  
  data: {
    city:'杭州',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
    search:function( e ){
    //console.log( this.data );
    var that = this;
    // var url = 'http://'+ e.detail.value.host + '/?c=api&a=user_get_token';
    // var url = 'http://www.weather.com.cn/data/cityinfo/101210101.html';
    var url = 'https://api.douban.com/v2/book/search?q=' + e.detail.value;
    wx.request({
      'url':url ,
      data: {},
      header: {
                'Content-Type': 'application/json'
            },
      success:function(res) {
      console.log(res.data);
      that.setData({
          rating:res.data.books[0].rating.average,
          author:res.data.books[0].author,
          author_intro:res.data.books[0].author_intro,
          summary:res.data.books[0].summary,
          src:res.data.books[0].images.large
      })
      },
    });
    //console.log( e.detail.value );
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
