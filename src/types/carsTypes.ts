export type CreateCarParams = {
  title: string
  brand: string
  price: string
  age: number
}

export type CreatedCarData = CreateCarParams & {
  _id: string
}
