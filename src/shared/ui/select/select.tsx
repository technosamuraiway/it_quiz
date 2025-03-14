import * as S from '@radix-ui/react-select'
import s from './select.module.scss'
import { ComponentPropsWithRef, useState } from 'react'

type Option = {
  label: number | string
  value: string
}

type Props = {
  onValueChange: (value: string) => void
  options: Option[]
  currentValue: string
} & ComponentPropsWithRef<typeof S.Root>

export const Select = ({ onValueChange, options, currentValue, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Root
      value={currentValue}
      onValueChange={onValueChange}
      onOpenChange={() => setIsOpen(!isOpen)}
      open={isOpen}
      {...rest}
    >
      <S.Trigger>
        <S.Value placeholder={'Выберите категорию'} />
      </S.Trigger>
    </S.Root>
  )
}
