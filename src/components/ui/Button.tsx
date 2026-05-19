import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-5 py-2.5 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        variant === 'primary' &&
          'bg-blue-600 hover:bg-blue-500 text-white shadow-lg glow disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'secondary' &&
          'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg glow-cyan disabled:opacity-50',
        variant === 'outline' &&
          'border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white disabled:opacity-50',
        variant === 'ghost' &&
          'text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-50',
        className
      )}
    >
      {children}
    </button>
  );
}
