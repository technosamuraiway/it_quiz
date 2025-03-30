import { SVGProps } from 'react'

type Props = {
  className?: string
  width?: string
  height?: string
} & SVGProps<SVGSVGElement>

export const LinkIcon = ({ width = '25', height = '25', className, ...rest }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M14.38 10.61C13.38 9.61 12.02 9.05 10.61 9.05C9.19 9.05 7.83 9.61 6.83 10.61L3.06 14.38C2.06 15.38 1.5 16.74 1.5 18.16C1.5 19.57 2.06 20.93 3.06 21.93C4.06 22.93 5.42 23.5 6.83 23.5C8.25 23.5 9.61 22.93 10.61 21.93L12.5 20.04"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10.61 14.38C11.61 15.38 12.97 15.95 14.38 15.95C15.8 15.95 17.16 15.38 18.16 14.38L21.93 10.61C22.93 9.61 23.5 8.25 23.5 6.83C23.5 5.42 22.93 4.06 21.93 3.06C20.93 2.06 19.57 1.5 18.16 1.5C16.74 1.5 15.38 2.06 14.38 3.06L12.5 4.95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
