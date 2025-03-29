import s from './Questions.module.scss'
import { Categories } from '@/widgets/categories'
import { selectData } from '@/pages/_components-list/mock-data'
import { Pagination, QuestionCard, Select } from '@/shared'
import { useState } from 'react'
import { mockQuestions } from '@/pages/questions/mockValues'

function Questions() {
  const [categoryValue, setCategoryValue] = useState(selectData[7].value)
  const [page, setPage] = useState(1)
  const totalCount = 10
  return (
    <div className={s.contentBlock}>
      <Categories />
      <Select options={selectData} onValueChange={setCategoryValue} currentValue={categoryValue} />
      {mockQuestions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
      <div className={s.paginationBlock}>
        <Pagination onChange={setPage} page={page} totalCount={totalCount} />
      </div>
    </div>
  )
}

export default Questions
