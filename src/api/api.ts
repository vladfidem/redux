import { config } from './config.ts'
import { getOptions } from './constants.ts'

export const get = async <T>(url: string): Promise<T> => {
  const response: Response = await fetch(`${config.apiUrl}${url}`, getOptions)
  return await response.json()
}
