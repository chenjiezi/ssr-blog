export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 404) {
      // console.log('error:', error)
      redirect('/')
    }

  })
}
