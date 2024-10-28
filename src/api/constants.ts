const headers: HeadersInit = new Headers()
headers.append('Content-Type', 'application/json')

export const getOptions: RequestInit = {
  method: 'GET',
  headers
}
