import {Box} from '@primer/react'
import Header from '@/Header';
import styles from './styles.module.css'

export default function Home(){
    return (
        <>
            <Header></Header>

            <main className={styles.main}>
                <div className={styles.div}>
                    <h1 className={styles.h1}>"Uva roxa, leu porque é trouxa"</h1>
                    <h2>— Eduardo, Carlos</h2>
                </div>

            </main>
        </>
    )
}
