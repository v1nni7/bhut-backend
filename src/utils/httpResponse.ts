const httpStatusCodes = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
} as const

type HttpStatusCode = keyof typeof httpStatusCodes

export function httpResponse(status: HttpStatusCode, message: string) {
  return {
    message,
    statusCode: httpStatusCodes[status],
  }
}
