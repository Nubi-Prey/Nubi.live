import {Box, Button} from '@primer/react'
import Image from 'next/image'
import Header from '@/Header';
import styles from './styles.module.css'
import logo from '/public/favicon.svg'

export default function Home(){
    return (
        <>
            <Header/>

            <main className={styles.main}>
                <section className={styles.projetos}>
                    <h1 className={styles.project_tittle}>Projetos</h1>
                    <div className={styles.cards}>
                        <div className={styles.card_box}>
                            <Image src={logo} className={styles.logo}/>
                            <h1>Nubi.live</h1>
                            <div className={styles.project_desc}>Nubi.live é meu primeiro site, criado com o intuito de me aprofundar nas tecnologias de web development.</div>
                            <a href='https://github.com/Nubi-Prey/Nubi.live' className={styles.btn_ver}>&#128270;</a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
