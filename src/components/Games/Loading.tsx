import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

export const Loading = () => (
  <div className="loading-con">
    <Spin
      indicator={<LoadingOutlined style={{ color: '#f0f0f0' }} />}
    />
  </div>
)
