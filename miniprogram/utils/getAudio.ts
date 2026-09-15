export function getAudioList(yi: string) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://www.yixueyanjiu.com/liangshan/get_audio_list.jsp',
      method: 'GET',
      data: { yi },
      success(res) {
        if (res.statusCode === 200 && res.data?.status === 'ok') {
          resolve(res.data)
        } else {
          reject(new Error('音频数据不存在'))
        }
      },
      fail: reject
    })
  })
}