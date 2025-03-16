import { ComponentPropsWithRef, memo } from 'react'

import { clsx } from 'clsx'

import s from '../../styles/PaginationButtons.module.scss'
import Typography from '@/shared/ui/typography'

type Props = {
  page: number
  selected: boolean
} & ComponentPropsWithRef<'button'>

export const PaginationPageBtn = memo(({ disabled, page, selected, ...rest }: Props) => {
  return (
    <button
      className={clsx(s.item, selected && s.selected)}
      disabled={selected || disabled}
      type={'button'}
      {...rest}
    >
      <Typography variant={'bodyS'}>{page}</Typography>
    </button>
  )
})
