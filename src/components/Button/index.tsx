import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  title: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  buttonStyle?: ButtonStyle;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export type ButtonStyle =
  | 'outlined'
  | 'container'
  | 'text'
  | 'primary'
  | 'dashed'
  | 'red'; // Adicionando a nova variação 'red'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xlg';

export type ButtonType = 'submit' | 'reset' | 'button';

export const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  size = 'md',
  type = 'button',
  buttonStyle = 'container',
  className = '', // Garantir que className tenha um valor padrão
  onClick,
  iconLeft,
  iconRight,
}) => {
  const finalSize = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xlg: 'h-14',
  }[size];

  const finalButtonStyle = {
    primary:
      'bg-neutro-b-400 hover:bg-neutro-b-600 active:bg-neutro-b-400 text-base font-medium font-dmsans text-white',
    container: 'bg-input text-indigo-100 text-white',
    outlined:
      'border border-w-[1.5px] border-neutro-b-400 hover:bg-neutro-w-200 active:bg-neutro-w-300 text-base font-medium font-dmsans',
    dashed:
      'border border-w-[1.5px] border-dashed border-neutro-b-400 hover:bg-neutro-w-200 active:bg-neutro-w-300 text-base font-medium font-dmsans',
    text: 'bg-transparent text-primary',
    red: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800', // Nova variação red
  }[buttonStyle];

  const disabledStyle = disabled
    ? 'disabled:bg-neutro-w-300 disabled:hover:bg-neutro-w-400 disabled:active:bg-neutro-w-500 cursor-not-allowed'
    : '';

  const finalClassName = `${finalSize} ${finalButtonStyle} ${disabledStyle} ${className}`;

  return (
    <button
      className={`flex justify-center items-center space-x-2 px-5 transition-colors duration-150 rounded-lg focus:shadow-outline ${finalClassName}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {iconLeft}
      <span>{title}</span>
      {iconRight}
    </button>
  );
};
