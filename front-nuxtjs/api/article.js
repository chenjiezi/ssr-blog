
export const getArticleList = (axios, params) => {
  return axios({
    method: 'GET',
    url: 'http://localhost:8888/api/article',
    params
  })
}