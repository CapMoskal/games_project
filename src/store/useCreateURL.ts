import { QueryParams } from '../types'

export const useCreateURL = (
  baseURL: string,
  params: QueryParams
): string => {
  const url = new URL(baseURL)
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      return url.searchParams.append(key, params[key])
    }
  })

  return url.toString()
}
