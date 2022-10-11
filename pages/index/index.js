// index.js
// 获取应用实例
const app = getApp()

var onData = {
  bg: 'https://raw.githubusercontent.com/duskgit/Moyanimage/master/image/179.jpg',
  image: 'https://raw.githubusercontent.com/duskgit/Moyanimage/master/image/179.jpg',
  content: '这世界有朝夕与四季，有理想与远方，有火锅和啤酒，还有温柔的你；欢迎来到送你一张小纸条。',
  from: '送你一张小纸条',
}

Page({
  data: onData,

  clickRefresh: function() {
    wx.request({
      url: 'https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l&encode=json',
      success: (res) => {
        console.log(res.data)
        var randombg = Math.round(Math.random() * 448 + 1)
        this.setData({
          bg: 'https://cdn.jsdelivr.net/gh/duskgit/Moyanimage@master/image/' + randombg + '.jpg',
          image: 'https://cdn.jsdelivr.net/gh/duskgit/Moyanimage@master/image/' + randombg + '.jpg',
          content: res.data.hitokoto,
          from: res.data.from,
        })
      }
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
