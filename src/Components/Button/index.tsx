import { createContext, forwardRef, useContext, useMemo } from 'react';

import variants, { ButtonVariantsProps } from './variants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantsProps;

const ButtonContext = createContext<{
  iconStyles: () => string;
}>({
  iconStyles: () => '',
});

const ButtonIcon = ({ icon: Icon }: { icon: React.ElementType }) => {
  const { iconStyles } = useContext(ButtonContext);

  return <Icon className={iconStyles()} />;
};

const ButtonNotification = ({ value }: { value: number }) => {
  const formatValue = useMemo(() => {
    return value > 9 ? '9+' : value.toString();
  }, [value]);

  return (
    <span className="absolute right-0 top-0 block h-6 w-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-alert-400 text-sm/[1.5rem] group-disabled:bg-brand-200">
      {formatValue}
    </span>
  );
};

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, disabled, className, size, ...rest }, forwardedRef) => {
    const buttonRole = useMemo(
      () => (color === 'link' ? 'link' : 'button'),
      [color],
    );

    const { base, icon } = variants({ color, disabled, size });
    return (
      <button
        {...rest}
        disabled={disabled}
        ref={forwardedRef}
        className={base({ className })}
        role={buttonRole}
      >
        <ButtonContext.Provider value={{ iconStyles: icon }}>
          {children}
        </ButtonContext.Provider>
      </button>
    );
  },
);

const Button = Object.assign({}, ButtonRoot, {
  Icon: ButtonIcon,
  Notification: ButtonNotification,
});

export default Button;
