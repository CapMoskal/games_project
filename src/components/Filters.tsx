import { ConfigProvider, Select } from 'antd'

import { useAppDispatch } from '../types'

import { setParams } from '../store/params/params-actions'

const platformOptions = [
  { value: null, label: 'All platforms' },
  { value: '4', label: 'PC' },
  { value: '16', label: 'PlayStation 3' },
  { value: '18', label: 'PlayStation 4' },
  { value: '187', label: 'PlayStation 5' },
  { value: '1', label: 'Xbox One' },
  { value: '186', label: 'Xbox Series S/X' },
  { value: '7', label: 'Nintendo Switch' },
  { value: '5', label: 'macOS' },
]
const genreOptions = [
  { value: null, label: 'All genres' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'indie', label: 'Indie' },
  { value: 'action', label: 'Action' },
  { value: 'role-playing-games-rpg', label: 'RPG' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'shooter', label: 'Shooter' },
  { value: 'casual', label: 'Casual' },
  { value: 'simulation', label: 'Simulation' },
  { value: 'arcade', label: 'Arcade' },
]
const orderOptions = [
  { value: null, label: 'No order' },
  { value: 'rating', label: 'Rating' },
  { value: 'released', label: 'Release date' },
  { value: 'name', label: 'Name' },
  { value: 'metacritic', label: 'Metacritic' },
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
      defaultValue={null}
      style={{ width: 130, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setParams({ ordering: value }))
      }}
      options={orderOptions}
    />
  )
  const genreS = (
    <Select
      defaultValue={null}
      style={{ width: 130, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setParams({ genres: value }))
      }}
      options={genreOptions}
    />
  )
  const platformsS = (
    <Select
      defaultValue={null}
      style={{ width: 140, marginRight: 5 }}
      onChange={(value) => {
        dispatch(setParams({ platforms: value }))
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
