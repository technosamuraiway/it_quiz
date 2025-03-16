import { ComponentPropsWithRef, memo } from 'react'

import { clsx } from 'clsx'

import s from './styles/PaginationButtons.module.scss'

export const PaginationPrevBtn = memo(({ ...rest }: ComponentPropsWithRef<'button'>) => {
  return (
    <button {...rest} className={clsx(s.item, s.arrow)} type={'button'}>
      <span>▲</span>
    </button>
  )
})
