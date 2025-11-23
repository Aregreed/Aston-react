import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: "primary" | "secondary";
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    type = "button",
    disabled = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;