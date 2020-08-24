import axios from 'axios'

// 请求封装 
const host = "http://www.codstu.cn:4000"   

export function get(url, data) {      //传入axios请求需要的参数
  return new Promise((resolve,reject) => {
    axios({
      url: host + url,
      method: 'get',
      params: {
        article_id: data
      }
    })
    .then(res => {
       resolve(res.data)         //返回请求数据
    })
    .catch(err => {
      reject(err.data)          //返回错误
    })
  })
}
