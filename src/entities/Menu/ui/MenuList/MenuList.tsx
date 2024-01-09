import classNames from "classnames";
import ImageItem from '@/shared/assets/menu/pizza/pizza.png'
import styles from "./MenuList.module.scss";
import Link from "next/link";
import { Card } from "@/features/Card/ui/Card";
import React, { useEffect, useState } from "react";
import { MenuItem } from "@/entities/Menu/ui/MenuItem/MenuItem";
import { MenuItemSchema } from "@/entities/Menu/model/types/MenuItemSchema";

interface MenuListProps {
    className?: string;
    scrollToSection?: any
}

const menu = [
    {
        id: 1,
        title: 'Пицца',
        key: 'pizza',
        items: [
            {
                id: 2,
                title: 'Маргарита',
                url: 'margarita',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 350,
                size: '35см',
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 3,
                title: 'Моццарелла',
                price: 450,
                size: '35см',
                url: 'mozzarella',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 4,
                title: 'Черепашка',
                size: '35см',
                price: 400,
                url: 'cherepashka',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            }
        ]
    },
    {
        id: 5,
        title: 'Роллы',
        key: 'rolls',
        items: [
            {
                id: 6,
                title: 'Маргарита',
                url: 'margarita',
                size: '35см',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 350,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 37,
                title: 'Моццарелла',
                url: 'mozzarella',
                size: '35см',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 450,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 8,
                title: 'Черепашка',
                url: 'cherepashka',
                size: '35см',
                imgPath: '../shared/assets/menu/pizza/pizza.webp',
                price: 400,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            }
        ]
    },
]

export const MenuList = () => {
    return (
        <div>
            {menu.map((category) => (
                <div key={category.id} className={classNames(styles.MenuListCategory)}>
                    <h2 className={classNames(styles.title)}>{category.title}</h2>
                    <div className={classNames(styles.menu)}>
                    {category.items.map((item:MenuItemSchema) => (
                        <MenuItem item={item} />
                    ))}
                    </div>
                </div>
            ))}
            <Card/>
        </div>
    )
}