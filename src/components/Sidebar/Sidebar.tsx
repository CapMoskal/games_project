import { SidebarSelect } from './SidebarSelect'

import { sidebarItems } from './SidebarsSections'

export const Sidebar = () => (
  <div className="sidebar">
    {Object.keys(sidebarItems).map((key) => (
      <SidebarSelect key={key} select={sidebarItems[key]} />
    ))}
  </div>
)
