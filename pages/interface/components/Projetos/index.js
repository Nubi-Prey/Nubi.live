import styles from './styles.module.css'
import Title from '@/Title'
import logo from '/public/favicon.svg'
import Image from 'next/image'

export default function Projetos(){
    return(
        <section className={styles.projetos}>

            <Title>Projetos</Title>
            <div className={styles.cards} id='projetos'>

                <div className={styles.card_box}>
                    <Image alt='nubi_logo' src={logo} className={styles.logo}/>
                    <h1>Nubi.live</h1>
                    <div className={styles.project_desc}>Nubi.live é meu primeiro site, criado com o intuito de me aprofundar nas tecnologias de web development.</div>
                    <a href='https://github.com/Nubi-Prey/Nubi.live' className={styles.btn_ver}>&#128270;</a>
                </div>
            </div>
        </section>
    )
}