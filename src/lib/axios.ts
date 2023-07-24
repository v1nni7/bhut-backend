import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api-test.bhut.com.br:3000/api',
})

export default instance
