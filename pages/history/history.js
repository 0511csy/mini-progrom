const app= getApp()


Page({
 data:{
   history:[]
 },
 onLoad:function(options){

 },
 onShow:function(){
   this.setData({history:wx.getStorageSync('history')})
 },
 onTabItem:function(e){
   wx.reLaunch({
     url: `/pages/index/index?query=${e.currentTarget.dataset.query}`,
   })
 }

})
