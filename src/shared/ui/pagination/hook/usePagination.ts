import { useCallback, useMemo } from 'react'

/* CONSTANTS */
const RANGE_CONSTANT = 1
const SIBLINGS_CONSTANT = 5
const INITIAL_RANGE_CONSTANT = 1
const SIBLINGS_INDEX_CONSTANT = 1
const DOTS_CONSTANT = 2
const DOTS_EVENT_CONSTANT = 3
const FIRST_PAGE_INDEX_CONSTANT = 1

const range = (start: number, end: number) => {
  const length = end - start + RANGE_CONSTANT

  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParam = {
  count: number
  onChange: (pageNumber: number) => void
  page: number
  siblings?: number
}

type PaginationRange = ('...' | number)[]

export const usePagination = ({ count, onChange, page, siblings = 1 }: UsePaginationParam) => {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + page + 2*DOTS
    const totalPageNumbers = siblings + SIBLINGS_CONSTANT

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= count) {
      return range(INITIAL_RANGE_CONSTANT, count)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(page - siblings, SIBLINGS_INDEX_CONSTANT)
    const rightSiblingIndex = Math.min(page + siblings, count)

    /*
      We do not show dots when there is only one page number to be inserted
      between the extremes of siblings and the page limits i.e 1 and totalPageCount.
      Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > DOTS_CONSTANT
    const shouldShowRightDots = rightSiblingIndex < count - DOTS_CONSTANT

    const firstPageIndex = FIRST_PAGE_INDEX_CONSTANT
    const lastPageIndex = count

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + DOTS_CONSTANT * siblings
      const leftRange = range(RANGE_CONSTANT, leftItemCount)

      return [...leftRange, DOTS, count]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = DOTS_EVENT_CONSTANT + DOTS_CONSTANT * siblings
      const rightRange = range(count - rightItemCount + RANGE_CONSTANT, count)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [siblings, page, count]) as PaginationRange

  const lastPage = paginationRange.at(-INITIAL_RANGE_CONSTANT)

  const isFirstPage = page === INITIAL_RANGE_CONSTANT
  const isLastPage = page === lastPage

  const handleNextPageClicked = useCallback(() => {
    onChange(page + INITIAL_RANGE_CONSTANT)
  }, [page, onChange])

  const handlePreviousPageClicked = useCallback(() => {
    onChange(page - INITIAL_RANGE_CONSTANT)
  }, [page, onChange])

  function handleMainPageClicked(pageNumber: number) {
    return () => onChange(pageNumber)
  }

  return {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  }
}
