import s from './components-list.module.scss'
import Typography from '@/shared/components/typography'
import { ReactNode } from 'react'

type List = {
  name: string
  component: ReactNode
}

const list: List[] = [
  {
    name: 'button',
    component: <div>123</div>,
  },
]

export const ComponentsList = () => {
  return (
    <ul className={s.list}>
      {list.map((item, index) => (
        <li key={index} className={s.item}>
          <Typography variant={'h3'}>{item.name}</Typography>
          {item.component}
        </li>
      ))}
    </ul>
  )
}
