import { EllipsisOutlined } from '@ant-design/icons'

export const NavBar = () => {
  return (
    <div className="navbar">
      <EllipsisOutlined
        onMouseOver={() => {
          // console.log('over')
          // сделать появление модального окна с доп кнопками
        }}
        className="navbar-item"
      />
      {/* наводя на троеточие будет выпадать меню с доп функциями (faq и тд) */}
    </div>
  )
}
