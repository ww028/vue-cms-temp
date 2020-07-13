import axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-ui'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.API, // url = base url + request url
  baseURL: 'http://localhost:3005/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response
    console.log(res)
    if (res.data.code === 200) {
      const res_data = res.data.data;
      return res_data
    } else {
      Message.error(res.data.codeMessage);
      return Promise.reject(error)
    }
  },
  error => {
    console.log('err debug' + error) // for debug
    Message({
      message: "数据请求失败，请刷新页面",
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
