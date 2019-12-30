
import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast, MessageBox } from 'mint-ui'
import store from '@/vuex/store'
import router from '@/router'

const instance = axios.create({
  // baseURL: 'http://localhost:4000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 4. 配置请求超时的时间
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 显示请求loading
  Indicator.open()

  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  console.log(config);
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 隐藏请求loading
    Indicator.close()
    console.log(response.data);
    return response.data
  },
  error => {
    // 隐藏请求loading
    Indicator.close()
    MessageBox('提示', '请求出错: ' + error.message)
    
    return new Promise(() => {}) // 返回一个pending状态的promise => 中断promie链
  }
)


export default instance

