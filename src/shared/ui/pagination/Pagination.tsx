import s from './Pagination.module.scss'

import { usePagination } from './hook/usePagination'
import { PaginationNextBtn, PaginationNumbers, PaginationPrevBtn, PaginationSelect } from './ui'
import { Nullable } from '@/shared'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPageTitle: string
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: Nullable<number>
  perPageOptions?: number[]
  showTitle: string
  siblings?: number
} & PaginationConditionals

export const Pagination = ({
  count,
  onChange,
  onPageTitle,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  showTitle,
  siblings,
}: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const isShowPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  const showPerPageSelect = isShowPerPageSelect && (
    <PaginationSelect
      {...{
        onPageTitle,
        onPerPageChange,
        perPage,
        perPageOptions,
        showTitle,
      }}
    />
  )

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PaginationPrevBtn disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <PaginationNumbers
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <PaginationNextBtn disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect}
    </div>
  )
}
