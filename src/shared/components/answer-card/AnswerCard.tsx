import s from './AnswerCard.module.scss'
import { Answer, Card, RoundCheckbox } from '@/shared'
import Typography from '@/shared/ui/typography'
import { FC } from 'react'

type Props = {
  checked: boolean
  onChange?: (checked: boolean) => void
  answer: Answer
}

export const AnswerCard: FC<Props> = ({ checked, onChange, answer }) => {
  const { title } = answer
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked)
    }
  }
  return (
    <Card className={s.answerCard}>
      <RoundCheckbox checked={checked} onChange={handleCheckboxChange} />
      <Typography variant={'h3'}>{title}</Typography>
    </Card>
  )
}
