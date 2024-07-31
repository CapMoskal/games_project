import { Select } from 'antd'
import { useAppDispatch } from '../types'
import { FiltersActionsType } from '../store/filters/filters-actions'

type Props = {
  action: (value: string) => FiltersActionsType
  options: { value: string; label: string }[]
  defaultValue: string
}

export const CustomFilter = ({
  action,
  options,
  defaultValue,
}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 120 }}
      onChange={(value) => {
        dispatch(action(value))
      }}
      // onClear={() => {
      //   // тут будем очищать стор фильтров
      //   console.log('cleared')
      // }}
      // allowClear
      options={options}
    />
  )
}
