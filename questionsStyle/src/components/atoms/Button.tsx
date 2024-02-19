
interface ButtonProps {
  Icon?: React.ComponentType | undefined;
  title ?: string; 
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

}

export function Button({ Icon, title, buttonProps }: ButtonProps) {
  return (
      <button {...buttonProps}>
          {Icon && <Icon />} 
          {title}
      </button>
  )
}
