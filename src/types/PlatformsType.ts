export interface Platform {
  platform: {
    id: number
    slug: string
    name: string
    img_background: string
  }
  released_at: string
  requirements: {
    minimum: string
    recommended: string
  }
}
