import s from './QuestionCard.module.scss'
import { Button, Card, Question } from '@/shared'
import Typography from '@/shared/ui/typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

type Props = {
  question: Question
  isDetails?: boolean
}

export const QuestionCard: FC<Props> = ({ question, isDetails = false }) => {
  const { title, code, id } = question
  return (
    <Card className={clsx(s.questionCard, { [s.border]: isDetails })}>
      <Typography weight={'medium'} variant={'h1'}>
        {title}
      </Typography>
      {code && (
        <SyntaxHighlighter
          className={s.codeBlock}
          language="javascript"
          style={tomorrow}
          showLineNumbers={true}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      )}
      {!isDetails && (
        <div className={s.button}>
          <Link to={`/questions/answer-details/${id}`}>
            <Button variant={'variant-default'} type={'button'}>
              Подробнее
            </Button>
          </Link>
        </div>
      )}
    </Card>
  )
}
