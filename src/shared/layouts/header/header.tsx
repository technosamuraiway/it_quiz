import s from './header.module.scss'
import Typography from '../../ui/typography'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()
  return (
    <header className={s.header}>
      <Link to={'/'}>
        <img height={80} className={s.logoImage} width={190} src="/logo/quiz-logo.svg" alt="logo" />
      </Link>

      <nav className={s.navigation}>
        <Link to={'/'}>
          <Typography
            weight={'medium'}
            pointer
            variant={'h2'}
            underline={location.pathname === '/'}
            className={s.navItem}
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
            className={s.navItem}
          >
            вопросы
          </Typography>
        </Link>
      </nav>
    </header>
  )
}
