import {SVGProps} from 'react'

type Props = {
    className?: string
    width?: string
    height?: string
} & SVGProps<SVGSVGElement>

export const CodeIcon = ({width = '1.5rem', height = '1.5rem', className, ...rest}: Props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M6.45 18.22L7.95 16.19L3.12 12L7.95 7.81L6.45 5.77L0.45 10.98C0.3 11.1 0.19 11.26 0.11 11.43C0.04 11.61 0 11.8 0 12C0 12.19 0.04 12.38 0.11 12.56C0.19 12.74 0.3 12.89 0.45 13.01L6.45 18.22ZM17.54 5.77L16.04 7.81L20.87 12L16.04 16.19L17.54 18.22L23.54 13.01C23.69 12.89 23.8 12.74 23.88 12.56C23.96 12.38 24 12.19 24 12C24 11.8 23.96 11.61 23.88 11.43C23.8 11.26 23.69 11.1 23.54 10.98L17.54 5.77ZM15.57 0.56L10.77 24L8.42 23.43L13.22 0L15.57 0.56Z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    )
}
