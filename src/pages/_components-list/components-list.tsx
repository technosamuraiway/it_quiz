import s from './components-list.module.scss'
import { ReactNode, useState } from 'react'
import { Button, NavigationButton, Select, Card, Pagination } from '@/shared'
import { Link } from 'react-router-dom'
import Typography from '@/shared/ui/typography'
import { selectData } from './mock-data'

type List = {
  name: string
  component: ReactNode
}

const SelectComponent = () => {
  const [value, setValue] = useState(selectData[0].value)

  return <Select options={selectData} onValueChange={setValue} currentValue={value} />
}

const PaginationComponent = () => {
  const [page, setPage] = useState(1)
  const TOTALNUMBER_OF_PAGES = 10
  const NUMBER_PER_PAGE = 5

  return (
    <Pagination
      onChange={setPage}
      page={page}
      perPage={NUMBER_PER_PAGE}
      count={TOTALNUMBER_OF_PAGES}
      onPageTitle={'onPageTitle'}
      showTitle={'showTitle'}
    />
  )
}

const list: List[] = [
  {
    name: 'Select',
    component: <SelectComponent />,
  },
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
  {
    name: 'Card',
    component: (
      <Card>
        <div>Content</div>
      </Card>
    ),
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
