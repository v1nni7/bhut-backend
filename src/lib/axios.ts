import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api-test.bhut.com.br:3000/api',
})

const instaceWebhook = axios.create({
  baseURL: process.env.WEBHOOK_URL,
})

export { instance, instaceWebhook }
