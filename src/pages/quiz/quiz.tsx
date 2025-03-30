import s from './quiz.module.scss'
import { useParams } from 'react-router-dom'
import { Categories, categoriesObject, questionsMap, QuestionsPagination } from '@/shared'
import { useState } from 'react'

type CategoryId = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export const Quiz = () => {
  const { id } = useParams()

  const [currentQuestion, setCurrentQuestion] = useState('1')

  return (
    <div className={s.root}>
      <Categories category={categoriesObject[id as CategoryId]} />

      <QuestionsPagination questionsMap={questionsMap} currentQuestion={currentQuestion} />
    </div>
  )
}
