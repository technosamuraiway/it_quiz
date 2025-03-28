import React, { FC, InputHTMLAttributes } from 'react'
import s from './RoundCheckbox.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (checked: boolean) => void
  checked: boolean
}

export const RoundCheckbox: FC<Props> = ({ onChange, checked, ...rest }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    onChange(isChecked)
  }
  return (
    <label className={s.checkboxContainer}>
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={s.hiddenInput}
      />
      <span className={s.checkmark}></span>
    </label>
  )
}
