import s from './quiz.module.scss'
import { Categories } from '@/shared/components/categories'
import { useParams } from 'react-router-dom'
import { categoriesObject, QuestionsPagination } from '@/shared'
import { useState } from 'react'
import { questionsMap } from './quiz-mock-data'

type CategoryId = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export const Quiz = () => {
  const { id } = useParams()

  const [currentQuestion, setCurrentQuestion] = useState('1')

  return (
    <div className={s.root}>
      <Categories category={categoriesObject[id as CategoryId]} />

      <QuestionsPagination
        questionsMap={questionsMap}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  )
}
