import { Button } from '@/shared'
import s from './navigation-button.module.scss'

type Props = {
  direction: 'left' | 'right'
}

export const NavigationButton = ({ direction }: Props) => {
  return (
    <Button variant={'variant-navigation'} type={'button'}>
      <span className={s.arrow}>{direction === 'left' ? '◀' : '▶'}</span>
    </Button>
  )
}
