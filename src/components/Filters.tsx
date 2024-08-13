import { ConfigProvider, Select } from 'antd'

import { useAppDispatch } from '../types'

import {
  setGenre,
  setOrder,
  setPlatform,
} from '../store/filters/filters-actions'

const platformOptions = [
  { value: null, label: 'All platforms' },
  { value: '1', label: 'PC' },
  { value: '2', label: 'PlayStation' },
  { value: '3', label: 'Xbox' },
  { value: '5', label: 'Apple Macintosh' },
  { value: '6', label: 'Linux' },
  { value: '7', label: 'Nintendo' },
]
const genreOptions = [
  { value: null, label: 'All genres' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'rpg', label: 'RPG' },
  { value: 'survival', label: 'Survival' },
]
const orderOptions = [
  { value: 'raiting', label: 'Raiting' },
  { value: 'released', label: 'Release date' },
  { value: 'name', label: 'Name' },
]

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
      defaultValue={null}
      style={{ width: 130, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setGenre(value))
      }}
      options={genreOptions}
    />
  )
  const platformsS = (
    <Select
      defaultValue={null}
      style={{ width: 140, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setPlatform(value))
      }}
      options={platformOptions}
    />
  )

  return (
    <div className="filters-con">
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
    </div>
  )
}
