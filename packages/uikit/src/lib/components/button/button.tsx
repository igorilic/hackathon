import {ArrowRightIcon, ChevronDownIcon} from '@heroicons/react/20/solid'
import {clx} from '../../common/utils'
export type ButtonProps = {
  variant: 'primary' | 'warning' | 'negative' | 'info'
  children: string | any
  size: 'large' | 'medium' | 'small'
  icon?: boolean
  dropdown?: boolean
  className?: string
}
const variantsClassName: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white',
  warning:
    'bg-warning-500 border-warning-300 hover:bg-warning-600 active:bg-warning-200 active:border-warning-400 text-white',
  negative:
    'bg-negative-500 hover:bg-negative-600 active:bg-negative-700 text-white',
  info: 'bg-info-500 hover:bg-info-600 active:bg-info-700 text-white'
}

const sizesClassName: Record<ButtonProps['size'], string> = {
  large: 'px-6 py-4',
  medium: 'px-4 py-3',
  small: 'px-3 py-2'
}
const iconClassName: Record<ButtonProps['size'], string> = {
  large: 'w-6 h-6',
  medium: 'w-5 h-5',
  small: 'w-4 h-4'
}

const baseClassName =
  'h-fit w-fit rounded-md focus:outline-none font-medium text-base shadow-md'

export function Button({
  variant,
  icon = false,
  dropdown = false,
  size,
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={clx([
        baseClassName,
        variantsClassName[variant],
        sizesClassName[size]
      ])}
    >
      <div className="flex items-center justify-center gap-2 whitespace-nowrap">
        {icon ? <ArrowRightIcon className="w-5 h-5" /> : null}
        {children}
        {dropdown ? <ChevronDownIcon className={iconClassName[size]} /> : null}
      </div>
    </button>
  )
}
