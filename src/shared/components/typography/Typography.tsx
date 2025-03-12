import { FC, JSX, ReactNode } from 'react'
import cx from 'classnames'
import classes from './Typography.module.sass'

// Defining the HTML tag that the component will support
const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyXL: 'p',
  bodyL: 'p',
  bodyM: 'p',
  bodyS: 'p',
} as { [key: string]: string }

export type VariantsType = 'h1' | 'h2' | 'h3' | 'bodyXL' | 'bodyL' | 'bodyM' | 'bodyS'

export type WeightType = 'bold' | 'medium' | 'light' | 'semibold' | 'normal'
export type ColorType =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'pastel'
  | 'light'
  | 'grey'
  | 'darkGrey'
  | 'text'
  | 'pink'
  | 'separator'
  | 'grey-dark'
export type TypographyProps = {
  variant?: VariantsType
  children?: ReactNode
  className?: string
  onClick?: () => void
  inherited?: boolean
  align?: 'left' | 'center' | 'right'
  error?: boolean
  color?: ColorType
  weight?: WeightType
  style?: any
  pointer?: boolean
  underline?: boolean
}

/**
 * ### typography.
 * Custom typography component with built-in styling and functionality.
 *
 * #### Props
 *
 * - `variant` - pre defined typography variant from design systems
 *
 * - `className` - custom classes for additional injection of styling if needed
 *
 * - `align` - text alignment option (left, center, right)
 *
 * @example
 * return (
 *   <typography variant="h1" className={classes.customStyling} align="center">
 *      The MyRefferalLinkCard
 *   </typography>
 * )
 */
const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className,
  inherited,
  align,
  error,
  color,
  pointer,
  weight = 'normal',
  underline,

  style: STYLE,
  ...rest
}) => {
  const Component = (variant ? variantsMapping[variant] : 'span') as keyof JSX.IntrinsicElements
  const style = classes[`typography--variant-${variant}`]
  const alignStyle = align ? classes[`typography--align-${align}`] : ''
  const weightStyle = classes[`typography--weight-${weight}`]
  const colorStyle = color ? classes[`typography--text-color-${color}`] : ''

  return (
    <Component
      {...rest}
      style={STYLE}
      className={cx(
        className,
        { [style]: !!variant },
        { [weightStyle]: !!weight },
        { [colorStyle]: !!color },
        error ? classes['typography-error'] : classes.typography,
        {
          [classes.inherited]: inherited,
          [alignStyle]: !!align,
        },
        { [classes.pointer]: !!pointer },
        { [classes.underline]: !!underline }
      )}
    >
      {children}
    </Component>
  )
}

export default Typography
