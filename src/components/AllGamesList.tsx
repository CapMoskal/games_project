import { Game } from '../types/GameType'

import { useGamesList } from '../hooks/useAllGamesList'

import { MetacriticRaiting } from './MetacriticRaiting'
import { Platforms } from './Platforms'

import {
  GiftOutlined,
  HeartOutlined,
  LoadingOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { ConfigProvider, Select, Spin } from 'antd'
import { QueryParams, useAppDispatch } from '../types'
import { API_KEY } from '../config'
import { useEffect } from 'react'
import { setParams } from '../store/params/params-actions'
import { setGenre } from '../store/filters/filters-actions'
import { CustomFilter } from './CustomFilter'

// options for select in filters
const genreOptions = [
  { value: 'allGenre', label: 'All genres' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'rpg', label: 'RPG' },
  { value: 'survival', label: 'Survival' },
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

export const AllGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useGamesList()

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // а нужке ли тут кастомный хук ??????
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // useParamURL() ??????
  useEffect(() => {
    const params: QueryParams = {
      key: API_KEY,
      page: 1,
      // page_size: 10,
      // ordering: 'raiting',
      // dates: '2017-01-01,2017-12-31',
    }
    dispatch(setParams(params))
  }, [dispatch])

  return (
    <div className="games-n-filters">
      <div className="filters-con">
        <ConfigProvider
          theme={{
            components: {
              Select: selectStyles,
            },
          }}
        >
          {/* разобрать, нужен ли будет в будущем этот кастомный компонент */}
          {/* ??????????????? */}
          <CustomFilter
            action={setGenre}
            options={genreOptions}
            defaultValue="allGenre"
          />
          <Select
            defaultValue="allGenre"
            style={{ width: 120 }}
            onChange={(value) => {
              dispatch(setGenre(value))
            }}
            options={genreOptions}
          />
          {/* ??????????????? */}
        </ConfigProvider>
      </div>
      <>
        {status === 'loading' && (
          <Spin
            indicator={
              <LoadingOutlined style={{ color: '#f0f0f0' }} />
            }
          />
        )}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <div className="games">
            <h1 className="games-title">All Games</h1>
            <div className="games-layout">
              {games.map((game: Game) => (
                <div key={game.id} className="game-card">
                  <img
                    className="game-card--img"
                    src={game.background_image}
                    alt={game.name}
                  />
                  <div className="game-card-info">
                    <div className="game-card-info--platforms">
                      <Platforms platforms={game.parent_platforms} />
                    </div>
                    <MetacriticRaiting raiting={game.metacritic} />
                  </div>
                  <h4 className="game-card--title">{game.name}</h4>
                  <div className="game-card--btns">
                    {/* добавить логику, если игра уже в моей библиотеке, 
                  то будет один значок, если игра не добавлена, то другой */}
                    {/* Также с другими значками  */}
                    {/* подумать какие кнопки должны быть */}
                    {/* <HeartOutlined className="game-card--btns--item" /> */}
                    <PlusCircleOutlined className="game-card--btns--item" />
                    <GiftOutlined className="game-card--btns--item" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  )
}
