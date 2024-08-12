import { useState } from 'react'

import { TScreenshotsResults } from '../../../../store/detail/detail-types'

interface Props {
  screenshots: TScreenshotsResults[]
}

export const ScreenshotsRender = ({ screenshots }: Props) => {
  const [mainImage, setMainImage] = useState<string>(
    screenshots[0]?.image
  )

  const handleOver = (src: string) => {
    setMainImage(src)
  }

  return (
    <div className="screenshots-con">
      <img
        className="screenshots main"
        src={mainImage}
        alt="main image"
      />
      <div className="screenshots-con--all">
        {screenshots?.map((elem) => (
          <img
            key={elem.id}
            className="screenshots mini"
            src={`${elem.image}`}
            onMouseOver={() => {
              handleOver(elem.image)
            }}
          />
        ))}
      </div>
    </div>
  )
}
