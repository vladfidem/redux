import axios from 'axios'
import { config } from './config'

export const get = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(`${config.apiUrl}${url}`)
  return data
}
