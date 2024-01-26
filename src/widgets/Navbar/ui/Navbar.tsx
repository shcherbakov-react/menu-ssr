'use client'
import React from "react";
import classNames from "classnames";
import Logo from "@/shared/assets/icons/logo.svg"
import Cart from "@/shared/assets/icons/cart.svg"
import s from "./Navbar.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    console.log(useSelector((state) => state))
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Image alt="logo" src={Logo}/>
            <div>
                <Image alt="Корзина" src={Cart}/>
                {/*<span>{count}</span>*/}
            </div>
        </div>
    )
}