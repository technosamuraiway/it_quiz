import s from './home.module.scss'
import Typography from '../../shared/ui/typography'
import { Categories } from '@/shared/components/categories'
import { categories } from '@/shared'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className={s.contentBlock}>
      <Categories />
      <ul className={s.categories}>
        {categories.map((category: { id: string; title: string }) => (
          <li key={category.id} className={s.category}>
            <Link to={`/quiz/${category.id}`} className={s.link}>
              <Typography weight={'normal'} variant={'h2'}>
                {category.title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      <img className={s.keyboard} src="/keyboard.svg" alt="keyboard" />
    </div>
  )
}

export default Home
