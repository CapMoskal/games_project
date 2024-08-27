import { useState } from 'react'

interface Props {
  question: string
  answer: string
}

export const FaqItem = ({ question, answer }: Props) => {
  const [isVisible, setIsVisible] = useState()

  return (
    <div className="faq-con--list-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  )
}
