import { EllipsisOutlined } from '@ant-design/icons'
import { ExtraInfoModal } from './ExtraInfoModal'

export const ExtraIcon = () => (
  <div className="navbar-icon-con">
    <EllipsisOutlined className="navbar-icon-con-item" />
    <ExtraInfoModal />
  </div>
)
