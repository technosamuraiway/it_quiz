import { Button } from '@/shared'
import s from './navigation-button.module.scss'
import clsx from 'clsx'

type Props = {
  direction: 'left' | 'right'
}

export const NavigationButton = ({ direction }: Props) => {
  return (
    <Button variant={'variant-navigation'} type={'button'}>
      <span className={clsx(s.arrow, direction === 'left' && s.arrowLeft)}>
        {direction === 'left' ? '◀' : '▶'}
      </span>
    </Button>
  )
}
