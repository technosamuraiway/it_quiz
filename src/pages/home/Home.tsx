import s from './Home.module.scss'
import Typography from '../../shared/ui/typography'

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
      <div className={s.title}>
        <div></div>
        <Typography weight={'medium'} variant={'h1'}>
          Категории
        </Typography>
        <div></div>
      </div>
      <div className={s.categories}>
        {mockCategories.map((category: any) => (
          <div key={category.id} className={s.category}>
            <Typography weight={'normal'} variant={'h2'}>
              {category.title}
            </Typography>
          </div>
        ))}
      </div>
      <img width={401} height={372} src="/keyboard.svg" alt="keyboard" />
    </div>
  )
}

export default Home
