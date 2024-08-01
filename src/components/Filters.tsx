import { ConfigProvider, Select } from 'antd'

import { useAppDispatch } from '../types'
import {
  setGenre,
  setOrder,
  setPlatform,
} from '../store/filters/filters-actions'

const platformOptions = [
  { value: 'allPlatforms', label: 'All platforms' },
  { value: 'playstation', label: 'Playstation' },
  { value: 'xbox', label: 'XBox' },
  { value: 'pc', label: 'PC' },
  { value: 'nintendo', label: 'Nintendo' },
  { value: 'linux', label: 'Linux' },
]
const genreOptions = [
  { value: 'allGenre', label: 'All genres' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'rpg', label: 'RPG' },
  { value: 'survival', label: 'Survival' },
]
const orderOptions = [
  { value: 'raiting', label: 'Raiting' },
  { value: 'releaseDate', label: 'Release date' },
  { value: 'name', label: 'Name' },
]
// !!!!!!!!!!
// нужно поменять value на id платформ !!!!!!!!!!
// !!!!!!!!!!

// styles for select antd
const selectStyles = {
  algorithm: true,
  colorBgBase: '#272729',
  colorTextBase: '#f0f0f0',
  optionActiveBg: '#343437',
  optionSelectedColor: '#272729',
  optionSelectedBg: '#38ff21',
}

type Props = {
  order: boolean
  genre?: boolean
  platforms?: boolean
}

export const Filters = ({
  order,
  genre = false,
  platforms = false,
}: Props) => {
  const dispatch = useAppDispatch()

  const orderS = (
    <Select
      defaultValue="raiting"
      style={{ width: 130, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setOrder(value))
      }}
      options={orderOptions}
    />
  )
  const genreS = (
    <Select
      defaultValue="allGenre"
      style={{ width: 130, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setGenre(value))
      }}
      options={genreOptions}
    />
  )
  const platformsS = (
    <Select
      defaultValue="allPlatforms"
      style={{ width: 140, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setPlatform(value))
      }}
      options={platformOptions}
    />
  )

  //   const selectorsList = [
  //     <Select
  //       defaultValue="raiting"
  //       style={{ width: 130, marginRight: 5 }}
  //       onChange={(value) => {
  //         dispatch(setOrder(value))
  //       }}
  //       options={orderOptions}
  //     />,
  //     <Select
  //       defaultValue="allPlatforms"
  //       style={{ width: 140, marginRight: 5 }}
  //       onChange={(value) => {
  //         dispatch(setPlatform(value))
  //       }}
  //       options={platformOptions}
  //     />,
  //     <Select
  //       defaultValue="allGenre"
  //       style={{ width: 130, marginRight: 5 }}
  //       onChange={(value) => {
  //         dispatch(setGenre(value))
  //       }}
  //       options={genreOptions}
  //     />,
  //   ]

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: selectStyles,
        },
      }}
    >
      {order && orderS}
      {genre && genreS}
      {platforms && platformsS}
    </ConfigProvider>
  )
}
