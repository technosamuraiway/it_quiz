import s from './Home.module.scss'
import Typography from '../../shared/ui/typography'
import { Categories } from '@/widgets/categories'

const mockCategories = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'CSS',
  },
  {
    id: 3,
    title: 'GIT',
  },
  {
    id: 4,
    title: 'JavaScript',
  },
  {
    id: 5,
    title: 'TypeScript',
  },
  {
    id: 6,
    title: 'React',
  },
  {
    id: 7,
    title: 'Computer Science',
  },
]

function Home() {
  return (
    <div className={s.contentBlock}>
      <Categories />
      <div className={s.categories}>
        {mockCategories.map((category: { id: number; title: string }) => (
          <div key={category.id} className={s.category}>
            <Typography weight={'normal'} variant={'h2'}>
              {category.title}
            </Typography>
          </div>
        ))}
      </div>
      <img className={s.keyboard} src="/keyboard.svg" alt="keyboard" />
    </div>
  )
}

export default Home
