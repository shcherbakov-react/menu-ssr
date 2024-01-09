import styles from './page.module.css'
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <MainPage />
        </main>
    )
}
