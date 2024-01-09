import React from "react";
import classNames from "classnames";
import Logo from "@/shared/assets/icons/logo.svg"
import Cart from "@/shared/assets/icons/cart.svg"
import s from "./Navbar.module.scss";
import Image from "next/image";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Image alt="logo" src={Logo}/>
            <Image alt="Корзина" src={Cart}/>
        </div>
    )
}