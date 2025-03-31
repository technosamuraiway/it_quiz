import { Button } from '@/shared'
import s from './navigation-button.module.scss'
import clsx from 'clsx'

type Props = {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}

export const NavigationButton = ({ direction, disabled, onClick }: Props) => {
  return (
    <Button variant={'variant-navigation'} type={'button'} disabled={disabled} onClick={onClick}>
      <span className={clsx(s.arrow, direction === 'left' && s.arrowLeft)}>
        {direction === 'left' ? '◀' : '▶'}
      </span>
    </Button>
  )
}
