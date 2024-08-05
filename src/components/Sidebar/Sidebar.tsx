import { SidebarSelect } from './SidebarSelect'

import { sidebarItems } from './SidebarsSections'

export const Sidebar = () => {
  // const today = new Date()
  // const year = today.getFullYear()
  // const month = today.getMonth()
  // const day = today.getDay()

  // const myProp = {
  //   year,
  //   month,
  //   day,
  // }

  return (
    <div className="sidebar">
      {Object.keys(sidebarItems).map((key) => (
        <SidebarSelect key={key} select={sidebarItems[key]} />
      ))}
    </div>
  )
}
