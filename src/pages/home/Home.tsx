import s from './Home.module.scss'
import Typography from '../../shared/ui/typography'
import { Categories } from '@/widgets/categories'
import { quizService } from '@/utils/quizData';



function Home() {
  const getCategories = quizService.getCategories();
  return (
    <div className={s.contentBlock}>
      <Categories />
      <div className={s.categories}>
        {getCategories.map((category: { id: number; name: string }) => (
          <div key={category.id} className={s.category}>
            <Typography weight={'normal'} variant={'h2'}>
              {category.name}
            </Typography>
          </div>
        ))}
      </div>
      <img className={s.keyboard} src="/keyboard.svg" alt="keyboard" />
    </div>
  )
}

export default Home
