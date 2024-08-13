import React from "react"
import { Link } from "gatsby"

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  // Determine the base styles
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition duration-200 ease-in-out focus:outline-none"

  // Define variant styles
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primaryDark",
    accent: "bg-accent text-white hover:bg-accentDark",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    navLink: "hover:bg-primaryLight hover:text-white",
  }

  // Define size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  // Combine all the styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // Render as a link if `to` or `href` is provided, otherwise as a button
  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href ? "_blank" : "_self"}
        rel={href ? "noopener noreferrer" : ""}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
