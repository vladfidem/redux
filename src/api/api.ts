import { config } from './config.ts'
import { getOptions } from './constants.ts'

export const get = async <T>(url: string, query?: Record<string, string | number>): Promise<T> => {
  const queryParams = query ? '?' + new URLSearchParams(query as Record<string, string>).toString() : ''
  const response = await fetch(`${config.apiUrl}${url}${queryParams}`, getOptions)
  return await response.json()
}
