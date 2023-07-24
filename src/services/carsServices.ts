import instance from '@/lib/axios'

async function getCars() {
  const { data } = await instance.get('/cars')

  return data
}

export default {
  getCars,
}
