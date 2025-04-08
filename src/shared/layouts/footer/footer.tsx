import s from './footer.module.scss'
import Typography from '@/shared/ui/typography'
import { buildDeployDate } from '@/shared'

export function Footer() {
  return (
    <footer className={s.footer}>
      <Typography variant={'h3'} weight={'normal'}>
        build:{buildDeployDate}
      </Typography>
      <Typography variant={'h3'} weight={'normal'}>
        technosamuraiway
      </Typography>
    </footer>
  )
}
