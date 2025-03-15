import * as S from '@radix-ui/react-select'
import { ComponentPropsWithRef, useMemo, useState } from 'react'
import s from './select.module.scss'
import { Scrollbar } from '@/shared'
import clsx from 'clsx'

const SelectOption = ({ label }: { label: string }) => <span className={s.option}>{label}</span>

export type Option = {
  label: string
  value: string
}

type Props = {
  onValueChange: (value: string) => void
  options: Option[]
  currentValue: string
} & ComponentPropsWithRef<typeof S.Root>

export const Select = ({ onValueChange, options, currentValue, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const memoOptions = useMemo(() => {
    return options.reduce(
      (acc, item) => {
        acc[item.value] = item.label

        return acc
      },
      {} as Record<string, string>
    )
  }, [options])

  return (
    <S.Root
      value={currentValue}
      onValueChange={onValueChange}
      onOpenChange={() => setIsOpen(!isOpen)}
      open={isOpen}
      {...rest}
    >
      <S.Trigger className={s.trigger}>
        <SelectOption label={memoOptions[currentValue]} />
        <span className={clsx(s.arrow, isOpen && s.arrowUp)}>▲</span>
      </S.Trigger>

      <S.Portal>
        <S.Content className={s.content} position={'popper'} side={'bottom'}>
          <S.Viewport asChild>
            <Scrollbar maxHeight={11}>
              {options.map(option => (
                <S.Item key={option.value} value={option.value} className={s.item}>
                  <SelectOption label={option.label} />
                </S.Item>
              ))}
            </Scrollbar>
          </S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
  )
}
