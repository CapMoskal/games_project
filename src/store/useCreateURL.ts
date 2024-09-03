import { QueryParams } from '../types'

export const useCreateURL = (
  baseURL: string,
  params: QueryParams
) => {
  const url = new URL(baseURL)
  Object.keys(params).forEach((key) => {
    const typedKey = key as keyof QueryParams
    if (params[typedKey]) {
      return url.searchParams.append(
        typedKey,
        params[typedKey] as string
      )
    }
  })

  return url.toString()
}
