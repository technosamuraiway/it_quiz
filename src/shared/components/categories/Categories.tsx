import s from './Categories.module.scss'
import Typography from '../../ui/typography'
import { FC } from 'react'

type Props = {
  category?: string
}
export const Categories: FC<Props> = ({ category }) => {
  return (
    <div className={s.title}>
      <Typography weight={'medium'} variant={'h1'}>
        {category ? category : 'Категории'}
      </Typography>
    </div>
  )
}
