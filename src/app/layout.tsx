import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles//globals.scss'
import { Provider } from "react-redux";
import StoreProvider from "@/app/providers/StoreProvider/StoreProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Меню I эZо – Сеть кафе и ресторанов грузинской кухни',
    description: 'В меню наших кафе и ресторанов присутствуют все виды хачапури, классические мясные и необычные, креативные хинкали с начинкой из сыра сулугуни и шпината, которые можно отведать только в ЭZO и равных которым нет ни в одном заведении города. меню. ... Ароматный Чашушули, нежный Чахохбили, знаменитый Оджахури, сочные шашлыки и люля-кебаб, несравненный Сациви, традиционный суп Харчо, салат «Тбилиси»',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <StoreProvider>
            <body className={inter.className}>{children}</body>
        </StoreProvider>
        </html>
    )
}
