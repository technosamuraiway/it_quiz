import { NextButton, PrevButton } from './navigation-buttons'
import { PrimaryPaginationButtons } from './primary-pagination-buttons'
import { usePagination } from './use-pagination'

import s from './pagination.module.scss'

export type PaginationProps = {
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: string) => void
  page: number
  perPage?: number
  perPageOptions?: string[]
  siblings?: number
  totalCount: number
}

export const Pagination = ({ onChange, page, siblings, totalCount }: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    hasNoData,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    onChange,
    page,
    siblings,
    totalCount,
  })

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton disabled={isFirstPage || hasNoData} onClick={handlePreviousPageClicked} />

        <PrimaryPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage || hasNoData} onClick={handleNextPageClicked} />
      </div>
    </div>
  )
}
