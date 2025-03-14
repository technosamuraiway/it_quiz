import s from './components-list.module.scss'
import Typography from '@/shared/components/typography'
import { ReactNode } from 'react'
import { Button, NavigationButton } from '@/shared'
import { Link } from 'react-router-dom'

type List = {
  name: string
  component: ReactNode
}

const list: List[] = [
  {
    name: 'Кнопка-карточка для квиза',
    component: (
      <Button variant={'variant-quiz-card'} as={Link} to={'/'} aria-label={'category-link'}>
        ComputerScience
      </Button>
    ),
  },
  {
    name: 'Кнопка-дефолтная',
    component: (
      <Button variant={'variant-default'} type={'button'}>
        Пропустить
      </Button>
    ),
  },
  {
    name: 'Кнопка-disabled',
    component: (
      <Button variant={'variant-default'} type={'button'} disabled>
        disabled
      </Button>
    ),
  },
  {
    name: 'Кнопка-навигация по вопросам',
    component: <NavigationButton direction={'right'} />,
  },
]

export const ComponentsList = () => {
  return (
    <ul className={s.list}>
      {list.map((item, index) => (
        <li key={index} className={s.item}>
          <Typography variant={'h3'}>{index + 1 + ' => ' + item.name}</Typography>
          {item.component}
        </li>
      ))}
    </ul>
  )
}
