import s from './AnswerDetails.module.scss'
import { Categories } from '@/widgets/categories'
import { Answer, QuestionCard } from '@/shared'
import { Link, useParams } from 'react-router-dom'
import { AnswerCard } from '@/shared/components/answer-card'
import Typography from '@/shared/ui/typography'
import { mockQuestions } from '@/pages/questions/mockValues'

const mockAnswers: Answer[] = [
  {
    id: '1',
    title:
      'какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.',
    isCorrect: true,
  },
  {
    id: '2',
    title:
      'какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.',
    isCorrect: false,
  },
  {
    id: '3',
    title:
      'какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.',
    isCorrect: false,
  },
  {
    id: '4',
    title:
      'какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший\n' +
      'ответ.',
    isCorrect: false,
  },
]

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
      <div className={s.noteBlock}>
        <div className={s.title}>
          <img height={24} width={24} src="/tegIcon.svg" alt="teg" />
          <Typography variant={'h2'} weight={'medium'}>
            Заметка
          </Typography>
        </div>
        <Typography className={s.noteText} variant={'h3'}>
          какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть хороший
          ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен быть
          хороший ответ.какой-то ответ тут, должен быть хороший ответ. какой-то ответ тут, должен
          быть хороший ответ.
        </Typography>
      </div>
      <div className={s.noteBlock}>
        <div className={s.title}>
          <img height={22} width={22} src="/linkIcon.svg" alt="link" />
          <Typography variant={'h2'} weight={'medium'}>
            Ссылки на документацию
          </Typography>
        </div>
        <Link className={s.link} to={'https://developer.mozilla.org/ru/docs/Web/HTML'}>
          <Typography pointer color={'accent-main'} weight={'medium'} variant={'h3'}>
            https://developer.mozilla.org/ru/docs/Web/
          </Typography>
        </Link>
      </div>
    </div>
  )
}

export default AnswerDetails
