export default function ({ $axios }, inject) {

  const api = $axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 5000
  })

  // 请求拦截器
  api.interceptors.request.use((config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // 响应拦截器
  api.interceptors.response.use(
    config => {
      const { data } = config

      return data
    },
    error => {

      return Promise.reject(error)
    }
  )

  inject('api', api)

}