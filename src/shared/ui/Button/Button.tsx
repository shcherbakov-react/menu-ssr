import React, {ButtonHTMLAttributes, FC} from "react";
import classNames from 'classnames/bind';
import styles from "./Buttom.module.scss";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...buttonProps
    } = props;

    return (
        <button
            className={classNames(styles.button, {}, [className, `${styles[theme]}`])}
            {...buttonProps}
        >
            {children}
        </button>
    )
}