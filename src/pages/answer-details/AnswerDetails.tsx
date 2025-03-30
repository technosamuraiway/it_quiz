import s from './AnswerDetails.module.scss'
import { Categories } from '@/shared/components/categories'
import { LinkBlock, mockAnswers, mockQuestions, NoteBlock, QuestionCard } from '@/shared'
import { useParams } from 'react-router-dom'
import { AnswerCard } from '@/shared/components/answer-card'

function AnswerDetails() {
  const { id } = useParams<{ id: string }>()

  const question = mockQuestions.find(q => q.id === Number(id))

  if (!question) {
    return <div className={s.contentBlock}>Вопрос не найден</div>
  }

  return (
    <div className={s.contentBlock}>
      <Categories category={question.category} />
      <QuestionCard isDetails question={question} />
      <div className={s.answerCards}>
        {mockAnswers.map(answer => (
          <AnswerCard key={answer.id} answer={answer} checked={answer.isCorrect} />
        ))}
      </div>
      <NoteBlock
        content={
          '    какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
          '          ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть\n' +
          '          хороший ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен\n' +
          '          быть хороший ответ.'
        }
      />

      <LinkBlock
        links={[
          'https://developer.mozilla.org/ru/docs/Web/HTML',
          'https://doka.guide/',
          'https://learn.javascript.ru/',
        ]}
      />
    </div>
  )
}

export default AnswerDetails
