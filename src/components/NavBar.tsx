import { EllipsisOutlined } from '@ant-design/icons'
import { MdAccountCircle } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/register">
        <MdAccountCircle className="navbar-item" />
      </NavLink>
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
