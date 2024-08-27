import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface Props {
  question: string
  answer: string
}

export const FaqItem = ({ question, answer }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const bigCardStyle = { height: '180px' }
  const smallCardStyle = { height: '70px' }

  const handleVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <div
      className="faq-con--list-item"
      style={isVisible ? bigCardStyle : smallCardStyle}
    >
      <div className="faq-con--list--header" onClick={handleVisible}>
        <h3>{question}</h3>
        {!isVisible ? <PlusOutlined /> : <MinusOutlined />}
      </div>
      <p style={isVisible ? { opacity: '1' } : {}}>{answer}</p>
    </div>
  )
}
