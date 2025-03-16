import { memo } from 'react'

import { PaginationDots } from './ui/PaginationDots'
import { PaginationPageBtn } from './ui/PaginationPageBtn'

type Props = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const PaginationNumbers = memo(({ currentPage, onClick, paginationRange }: Props) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <PaginationDots key={index} />
        }

        return (
          <PaginationPageBtn
            key={index}
            onClick={onClick(page)}
            page={page}
            selected={isSelected}
          />
        )
      })}
    </>
  )
})
