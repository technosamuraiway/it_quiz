import s from './quiz.module.scss'
import { Categories } from '@/widgets/categories'
import { useParams } from 'react-router-dom'
import { categoriesObject } from '@/shared'

type CategoryId = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export const Quiz = () => {
  const { id } = useParams()

  if (!id) {
    return
  }

  return (
    <div className={s.root}>
      <Categories category={categoriesObject[id as CategoryId]} />
    </div>
  )
}
