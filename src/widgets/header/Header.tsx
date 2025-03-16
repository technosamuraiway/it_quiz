import s from './Header.module.scss'
import Typography from '../../shared/ui/typography'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  return (
    <div className={s.header}>
      <Link to={'/'}>
        <img height={80} className={s.logoImage} width={190} src="/logoQuiz.svg" alt="logo" />
      </Link>
      <div>
        <Typography weight={'medium'} pointer variant={'h2'} underline={location.pathname === '/'}>
          главная
        </Typography>
        <Typography weight={'medium'} pointer variant={'h2'}>
          вопросы
        </Typography>
      </div>
    </div>
  )
}

export default Header
