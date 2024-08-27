import { FaqItem } from './FaqItem'
import { faqItems } from './faqItems'

export const FaqList = () => (
  <div className="faq-con--list">
    {faqItems.map((elem) => (
      <FaqItem question={elem.question} answer={elem.answer} />
    ))}
  </div>
)
