import axios from 'axios' 
const host = "http://localhost:5757"    //自定义请求前缀 ？？？5757

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
