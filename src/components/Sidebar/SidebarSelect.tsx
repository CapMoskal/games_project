import { NavLink } from 'react-router-dom'

import { TSidebarSection } from './SidebarTypes'

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'sidebar-select-item active-link' : 'sidebar-select-item'

interface TProp {
  select: TSidebarSection
}
export const SidebarSelect = ({ select }: TProp) => (
  <div className="sidebar-select">
    <h3 className="sidebar-select--title">{select.title}</h3>
    {select.selects.map((elem) => (
      <NavLink
        key={elem.selectTitle}
        className={setStyle}
        to={elem.to}
      >
        {elem.icon}
        {elem.selectTitle}
      </NavLink>
    ))}
  </div>
)
