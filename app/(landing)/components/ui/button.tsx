import React from "react";

type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  size?: "small" | "normal" ;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className, variant= "light", size = "normal", ...props} : TButtonProps) => {
  const baseStyles = "inline-flex gap-2 items-center justify-center rounded-md cursor-pointer";

  const variants = {
    light: 'bg-white text-primary border border-slate-200 hover:border-muted hover:text-primary hover:-translate-y-px hover:shadow-sm transition-all duration-200',
    dark: 'bg-primary text-white border border-primary hover:bg-primary/90 hover:-translate-y-px hover:shadow-sm transition-all duration-200'
  }

  const sizes = {
    small : 'px-3 py-1 text-sm',
    normal : 'px-5 py-3 text-base'
  }

  return(
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}{...props}>
      {children}
    </button>
  )
}

export default Button;