'use client'
import React from 'react'
import styles from "@/entities/Menu/ui/MenuList/MenuList.module.scss";
import ImageItem from "@/shared/assets/menu/pizza/pizza.jpg";
import classNames from "classnames";
import { MenuItemSchema } from "@/entities/Menu/model/types/MenuItemSchema";
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { increment } from "@/features/Cart/model/slice/CartSlice";

export const MenuItem = ({item} : MenuItemSchema, openCard: () => void) => {
    const dispatch = useDispatch()
    const handleIncrease = () => {
        dispatch(increment)
    };
    return (
        <div className={classNames(styles.item)} key={item.id} onClick={() => console.log( 'qwe')}>
            <Image alt={item.title} src={ImageItem} className={classNames(styles.itemImg)}/>
            <div>
                <div className={classNames(styles.itemTitle)}>{item.title}</div>
                <div className={classNames(styles.itemComposition)}>{item.composition}</div>
                <div className={classNames(styles.itemSize)}>
                    {item.size}
                </div>
                <div
                    className={classNames(styles.itemAction)}>
                    <div className={classNames(styles.counterWrap)}>
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.40089 6V0H3.59467V6H2.40089ZM0 3.59467V2.40089H6V3.59467H0Z" fill="white"/>
                        </svg>
                    </div>
                    <div className={classNames(styles.itemPrice)}>
                        {item.price}
                    </div>
                    <div onClick={handleIncrease} className={classNames(styles.counterWrap)}>
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.40089 6V0H3.59467V6H2.40089ZM0 3.59467V2.40089H6V3.59467H0Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
