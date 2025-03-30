import { QuestionPagination } from '@/shared'

import s from './questions-pagination.module.scss'
import clsx from 'clsx'

type Props = {
  questionsMap: QuestionPagination
  currentQuestion: string
}

export const QuestionsPagination = ({ questionsMap, currentQuestion }: Props) => {
  return (
    <div>
      <h2 className={s.counter}>{currentQuestion} / 10</h2>

      <ul className={s.list}>
        {questionsMap.map((item, index) => (
          <li key={index} className={s.item}>
            <span
              className={clsx(
                s.circle,
                item === true && s.circleCorrect,
                item === false && s.circleIncorrect,
                currentQuestion === String(index + 1) && s.circleActive
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
