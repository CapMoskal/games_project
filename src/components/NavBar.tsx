import { EllipsisOutlined } from '@ant-design/icons'

export const NavBar = () => {
  return (
    <div className="navbar">
      <EllipsisOutlined
        onMouseOver={() => {
          console.log('over')
        }}
        className="navbar-item"
      />
      <div className="modal">
        <ul>
          <li>FAQ</li>
          <li>Discord</li>
          <li>Poshel naxyi</li>
        </ul>
      </div>
    </div>
  )
}
