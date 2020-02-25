```
  var aa = wx.getFileSystemManager();
  let timestamp = new Date().getTime();
  let _filePath = wx.env.USER_DATA_PATH + '/' + timestamp + '.png';
  aa.writeFile({
    filePath: _filePath,
    data: srcData.slice(22),
    encoding: 'base64',
    success: res => {
      that.setData({
        saveImgSrc: _filePath
      })
      that.saveToPhoneFn()
    }, fail: err => {
      console.log(err)
    }
  })
 ```   
 ```
  //保存海报
  saveToPhone: function (){
    //获取相册授权
    let imgSrc = this.data.saveImgSrc;
   
    wx.showLoading({
      title: '保存中...',
      mask:true
    })
    //图片保存到本地
    wx.saveImageToPhotosAlbum({
      filePath: imgSrc,
      success: function (data) {
        console.log(data)
        wx.hideLoading()
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (err) {
        console.log(err);

        if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
          console.log("当初用户拒绝，再次发起授权")
          wx.showModal({
            title: '提示',
            content: '需要您授权保存相册',
            showCancel: false,
            success: modalSuccess => {
              wx.openSetting({
                success(settingdata) {
                  console.log("settingdata", settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限成功,再次点击保存图片即可保存',
                      showCancel: false,
                    })
                  } else {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限失败，将无法保存到相册哦~',
                      showCancel: false,
                    })
                  }
                },
                fail(failData) {
                  console.log("failData", failData)
                },
                complete(finishData) {
                  console.log("finishData", finishData)
                }
              })
            }
          })
        }
      },
      complete(res) {
        console.log(res);
        wx.hideLoading()
      }
    })
    
  }
  ```
