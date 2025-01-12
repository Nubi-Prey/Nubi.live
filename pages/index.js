import Header from '@/Header';
import Projetos from '@/Projetos'
import AboutMe from '@/AboutMe'
import styles from './styles.module.css'


export default function Home(){
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <AboutMe/>
                <Projetos/>
            </main>
        </>
    )
}
