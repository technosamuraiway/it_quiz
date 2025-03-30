import s from './link-block.module.scss'
import Typography from '@/shared/ui/typography'
import { Link } from 'react-router-dom'
import { LinkIcon } from '@/shared'

type Props = {
  links: string[]
}

export const LinkBlock = ({ links }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <LinkIcon height={'1.5rem'} width={'1.5rem'} />
        <Typography variant={'h2'} weight={'medium'}>
          Документация
        </Typography>
      </div>

      <ul>
        {links.map(link => (
          <li className={s.linkItem} key={link.slice(12)}>
            <Link to={link} className={s.link} target={'_blank'}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
