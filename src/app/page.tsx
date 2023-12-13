import Image from 'next/image'
import styles from './page.module.css'
import { Category } from "@/features/Category/ui/Category";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <MainPage/>
        </main>
    )
}
