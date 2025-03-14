import s from './button.module.scss'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

type variants = 'variant-quiz-card' | 'variant-default' | 'variant-navigation'

type Props<T extends ElementType = 'button'> = {
  as?: T | typeof Link
  variant: variants
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  variant,
  as,
  children,
  className,
  disabled,
  ...rest
}: Props<T>) => {
  const Component = as || 'button'
  return (
    <Component className={clsx(className, s[variant], disabled && s.isDisabled)} {...rest}>
      {children}
    </Component>
  )
}
