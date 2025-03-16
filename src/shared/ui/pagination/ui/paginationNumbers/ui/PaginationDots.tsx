import { ComponentPropsWithRef, memo } from 'react'

import s from '../../styles/PaginationButtons.module.scss'

export const PaginationDots = memo(({ ...rest }: ComponentPropsWithRef<'span'>) => {
  return (
    <span className={s.dots} {...rest}>
      &#8230;
    </span>
  )
})
