export interface QueryParams {
  key?: string
  platforms?: string | null
  page?: number
  page_size?: number
  genres?: string
  dates?: string
  ordering?: string
}

export interface DetailParams {
  key: string
  id: string
}
