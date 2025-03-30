import s from './header.module.scss'
import Typography from '../../shared/ui/typography'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  return (
    <header className={s.header}>
      <Link to={'/'}>
        <img height={80} className={s.logoImage} width={190} src="/logoQuiz.svg" alt="logo" />
      </Link>
      <div>
        <Link to={'/'}>
          <Typography
            weight={'medium'}
            pointer
            variant={'h2'}
            underline={location.pathname === '/'}
          >
            главная
          </Typography>
        </Link>

        <Link to={'/questions'}>
          <Typography
            weight={'medium'}
            underline={location.pathname === '/questions'}
            pointer
            variant={'h2'}
          >
            вопросы
          </Typography>
        </Link>
      </div>
    </header>
  )
}
