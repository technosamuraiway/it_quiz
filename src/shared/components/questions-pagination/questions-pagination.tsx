import { QuestionPagination } from '@/shared'

import s from './questions-pagination.module.scss'
import clsx from 'clsx'
import Typography from '@/shared/ui/typography'

type Props = {
  questionsMap: QuestionPagination
  currentQuestion: string
  setCurrentQuestion: (question: string) => void
}

export const QuestionsPagination = ({
  questionsMap,
  setCurrentQuestion,
  currentQuestion,
}: Props) => {
  return (
    <div className={s.root}>
      <Typography variant={'bodyL'}>{currentQuestion}/10</Typography>

      <ul className={s.list}>
        {questionsMap.map((item, index) => (
          <li key={index} className={s.item} onClick={() => setCurrentQuestion(String(index))}>
            <span className={clsx(s.circle)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
