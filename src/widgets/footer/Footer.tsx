import s from './Footer.module.scss'
import Typography from '../../shared/ui/typography'

function Footer() {
  function formatDateToCustomFormat(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)

    return `${year}${month}${day}`
  }

  return (
    <div className={s.footer}>
      <Typography variant={'h3'} weight={'normal'}>
        build:{formatDateToCustomFormat(new Date())}
      </Typography>
      <Typography variant={'h3'} weight={'normal'}>
        technosamuraiway
      </Typography>
    </div>
  )
}

export default Footer
