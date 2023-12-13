import classNames from "classnames";
import Image from 'next/image'
import ImageItem from '@/shared/assets/menu/pizza/pizza.png'
import styles from "./MenuList.module.scss";

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
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 350,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 3,
                title: 'Моццарелла',
                price: 450,
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 4,
                title: 'Черепашка',
                price: 400,
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
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 350,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 37,
                title: 'Моццарелла',
                imgPath: 'shared/assets/menu/pizza/pizza.webp',
                price: 450,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            },
            {
                id: 8,
                title: 'Черепашка',
                imgPath: '../shared/assets/menu/pizza/pizza.webp',
                price: 400,
                composition: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо'
            }
        ]
    },
]

export const MenuList = (props: MenuListProps) => {
    const {
        className,
    } = props;

    return (
        <div>
            {menu.map((category) => (
                <div key={category.id} className={classNames(styles.MenuListCategory)}>
                    <h2 className={classNames(styles.title)}>{category.title}</h2>
                    {category.items.map((item) => (
                        <div className={classNames(styles.item)} key={item.id}>
                            <Image src={ImageItem} className={classNames(styles.itemImg)}/>
                            <div>
                                <div className={classNames(styles.itemTitle)}>{item.title}</div>
                                <div className={classNames(styles.itemComposition)}>{item.composition}</div>
                                <div className={classNames(styles.itemAction)}>
                                    <div className={classNames(styles.itemPrice)}>
                                        {item.price}
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}