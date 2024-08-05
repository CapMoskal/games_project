import {
  DatabaseFilled,
  FireFilled,
  GiftFilled,
  InboxOutlined,
  StarFilled,
} from '@ant-design/icons'

import { TSidebar } from './SidebarTypes'

export const sidebarItems: TSidebar = {
  main: {
    title: 'Main',
    selects: [
      {
        to: '/',
        icon: <DatabaseFilled className="icon-con" />,
        selectTitle: 'All games',
      },
      {
        to: 'wishlist',
        icon: <GiftFilled className="icon-con" />,
        selectTitle: 'Wishlist',
      },
      {
        to: 'library',
        icon: <InboxOutlined className="icon-con" />,
        selectTitle: 'My library',
      },
    ],
  },
  newReleases: {
    title: 'New Releases',
    selects: [
      {
        to: 'lastMonth',
        icon: <StarFilled className="icon-con" />,
        selectTitle: 'Last 30 days',
      },
      {
        to: 'lastWeek',
        icon: <FireFilled className="icon-con" />,
        selectTitle: 'Last week',
      },
    ],
  },
}
