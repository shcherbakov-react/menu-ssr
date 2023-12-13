import React, { MouseEvent, MouseEventHandler, useContext, useState } from "react";
import classNames from "classnames";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import styles from './Category.module.scss'

interface CategoryProps {
    className?: string;
    scrollToSection?: any;
}

const categories = [
    {
        text: 'Все',
        key: '',
    },
    {
        text: 'Пицца',
        key: 'pizza',
    },
    {
        text: 'Роллы',
        key: 'rolls',
    },
    {
        text: 'Паста',
        key: 'pasta',
    },
    {
        text: 'Горячее',
        key: 'Hotter',
    },
    {
        text: 'Для детей',
        key: 'children',
    },
]

export const Category = (props: CategoryProps) => {
    const {
        className,
    } = props;


    return (
        <div className={classNames(styles.category, {}, [className])}>
            <ul className={styles.links}>
                {categories.map(({text, key}) => (
                    <li key={key}>
                        <Button id={key} className={classNames(styles.Button)}
                                theme={ThemeButton.CLEAR}>
                            {text}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
