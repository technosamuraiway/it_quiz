import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './Pagination'

const perPageOptions = [5, 10, 250]

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Pagination',
}

export default meta

type Story = StoryObj<typeof Pagination>

type WrapperType = {
  onPageTitle: string
  showTitle: string
}

const TOTAL_PAGES_COUNT = 10

const Wrapper = ({ onPageTitle, showTitle }: WrapperType) => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageOptions[0])

  return (
    <Pagination
      count={TOTAL_PAGES_COUNT}
      onChange={setPage}
      onPageTitle={onPageTitle}
      onPerPageChange={setPerPage}
      page={page}
      perPage={perPage}
      perPageOptions={perPageOptions}
      showTitle={showTitle}
    />
  )
}

export const Default: Story = {
  render: () => <Wrapper onPageTitle={'на странице'} showTitle={'Показать'} />,
}

export const WithEnglish: Story = {
  render: () => <Wrapper onPageTitle={'per Page'} showTitle={'Show'} />,
}
