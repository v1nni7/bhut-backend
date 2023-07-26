export type CreateCarParams = {
  title: string
  brand: string
  price: string
  age: number
}

export type Car = CreateCarParams & {
  _id: string
}
