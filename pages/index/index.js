//引入用来发送请求的方法 一定要把路径补全
import { request } from '../../request/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    catesList:[],
    //楼层数据
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送异步请求获取轮播图数据,优化的手段可以通过es6的promise来解决这个问题 
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  //获取轮播图数据
  getSwiperList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    }).then(result=>{
      this.setData({
          //拿到数据赋值
          swiperList:result.data.message
        })
    })
  },
  //获取分类导航数据
  getCatesList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
    }).then(result=>{
      this.setData({
          //拿到数据赋值
          catesList:result.data.message
        })
    })
  },
   //获取楼层数据
   getFloorList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
    }).then(result=>{
      console.log(result.data.message);
      this.setData({
          //拿到数据赋值
          floorList:result.data.message
        })
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
    
  }
})