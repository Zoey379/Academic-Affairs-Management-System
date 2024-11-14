import axios from 'axios'
// import Vue from 'vue'
import { Loading } from 'element-ui'
import { getUserLoginToken } from '@/utils/storage.js'
// import router from '@/router/index.js'

// const token = getUserLoginToken()

//自定义加载界面的选项
const options = {
  lock: true,
  background: 'rgba(20, 20, 20, 0.6)'
}


const requst =  axios.create({
    // baseURL: 'http://10.157.77.168:8080/',
    // baseURL: 'http://175.178.41.55:8080/',
    baseURL: 'http://127.0.0.1:8080/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// 添加请求拦截器
requst.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Loading.service(options)
    // config.headers('X-token') = getUserLoginToken()
    config.headers.Authorization = getUserLoginToken()
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error)
    // return Promise.reject(error);
  });

// 添加响应拦截器
requst.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    Loading.service(options).close()
    // if (response.data.message === 'NOT_LOGIN') {

    // }
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.data.message === 'NOT_LOGIN') {
      Loading.service(options).close()
      return error.response
    }
    return Promise.reject(error);
  });

  export default requst