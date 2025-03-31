import s from './quiz.module.scss'
import { useParams } from 'react-router-dom'
import {
  Button,
  Categories,
  categoriesObject,
  LinkBlock,
  NavigationButton,
  NoteBlock,
  questionsMap,
  QuestionsPagination,
} from '@/shared'
import { useState } from 'react'

type CategoryId = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export const Quiz = () => {
  const { id } = useParams()

  const [currentQuestion, setCurrentQuestion] = useState('1')
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null)

  return (
    <div className={s.root}>
      <Categories category={categoriesObject[id as CategoryId]} />

      <QuestionsPagination questionsMap={questionsMap} currentQuestion={currentQuestion} />

      <div className={s.buttonsBlock}>
        <NavigationButton
          direction={'left'}
          disabled={currentQuestion === '1'}
          onClick={() => {}}
        />
        <Button
          variant={'variant-default'}
          type={'button'}
          className={s.answerButton}
          disabled={!currentAnswer}
        >
          Ответить
        </Button>
        <NavigationButton direction={'right'} disabled={currentQuestion === '10'} />
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
