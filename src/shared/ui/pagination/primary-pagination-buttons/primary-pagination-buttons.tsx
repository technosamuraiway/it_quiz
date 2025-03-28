import { PageButton } from '@/shared/ui/pagination/primary-pagination-buttons/page-button'

import { Dots } from './dots'

type MainPaginationButtonsPropsType = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const PrimaryPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsPropsType) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}
