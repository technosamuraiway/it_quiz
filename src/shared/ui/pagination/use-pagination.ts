import { useCallback, useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
  onChange?: (pageNumber: number) => void
  page: number
  siblings?: number
  totalCount: number
}

type PaginationRange = ('...' | number)[]

export const usePagination = ({
  onChange,
  page,
  siblings = 1,
  totalCount,
}: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings + 5

    if (totalPageNumbers >= totalCount) {
      return range(1, totalCount)
    }

    const leftSiblingIndex = Math.max(page - siblings, 1)
    const rightSiblingIndex = Math.min(page + siblings, totalCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(totalCount - rightItemCount + 1, totalCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [siblings, page, totalCount]) as PaginationRange

  const lastPage = paginationRange.at(-1)

  const isFirstPage = page === 1
  const isLastPage = page === lastPage

  const handleNextPageClicked = useCallback(() => {
    onChange?.(page + 1)
  }, [page, onChange])

  const handlePreviousPageClicked = useCallback(() => {
    onChange?.(page - 1)
  }, [page, onChange])

  const handleMainPageClicked = (pageNumber: number) => {
    return () => onChange?.(pageNumber)
  }

  const hasNoData = totalCount === 0

  return {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    hasNoData,
    isFirstPage,
    isLastPage,
    paginationRange,
  }
}
