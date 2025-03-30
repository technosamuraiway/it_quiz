import s from './note-block.module.scss'
import Typography from '@/shared/ui/typography'
import { CodeIcon } from '@/shared'

type Props = {
  content: string
}

export const NoteBlock = ({ content }: Props) => {
  return (
    <div>
      <div className={s.title}>
        <CodeIcon width={'1.5rem'} height={'1.5rem'} />

        <Typography variant={'h2'} weight={'medium'}>
          Заметка
        </Typography>
      </div>
      <Typography variant={'h3'} className={s.content}>
        {content}
      </Typography>
    </div>
  )
}
