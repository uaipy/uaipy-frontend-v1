import { VariantProps, tv } from 'tailwind-variants';

const buttonVariants = tv({
  slots: {
    base: 'group relative inline-flex size-full items-center justify-center gap-x-2 break-words rounded-lg px-3.5 py-2.5 text-sm leading-5 lg:text-base lg:font-medium lg:leading-6',
    icon: 'size-5',
  },
  variants: {
    color: {
      primary: {
        base: 'bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-500',
      },
      secondary: {
        base: 'border border-primary-400 bg-white text-primary-400 hover:border-primary-500 hover:text-primary-500',
      },
      link: {
        base: 'border-0 text-primary-400 underline underline-offset-2 hover:text-primary-500',
      },
    },
    disabled: {
      true: {
        base: 'pointer-events-none',
      },
    },
    size: {
      xs: {
        base: 'px-2.5 py-1.5 text-xs',
        icon: 'size-3.5',
      },
      sm: {
        base: 'px-3 py-2 text-sm',
        icon: 'size-4',
      },
      md: {
        base: 'px-3.5 py-2.5 text-base',
        icon: 'size-5',
      },
      lg: {
        base: 'px-4 py-3 text-lg',
        icon: 'size-6',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: true,
      className: 'bg-brand-200',
    },
    {
      color: 'secondary',
      disabled: true,
      className: 'border-brand-200 text-brand-300',
    },
    {
      color: 'link',
      disabled: true,
      className: 'text-brand-300',
    },
  ],
  defaultVariants: {
    color: 'primary',
  },
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export default buttonVariants;
