import axios from 'axios'

const service = axios.create({
  baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io',
  timeout: 60000
})

export default service