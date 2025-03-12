import styles from './styles.module.css'
import Title from '@/Title'
import logo from '/public/favicon.svg'
import nuboxLogo from '/public/images/nubox.svg'
import jokenpoLogo from '/public/images/jokenpo-battle-round.svg'
import Image from 'next/image'

export default function Projetos(){
    return(
        <section className={styles.projetos}>

            <Title>Projetos</Title>
            <div className={styles.cards} id='projetos'>

                <div className={styles.card_box}>
                    <Image alt='Nubi.Live' src={logo} className={styles.logo}/>
                    <h1>Nubi.live</h1>
                    <div className={styles.project_desc}>Nubi.live é meu primeiro site, criado com o intuito de me aprofundar nas tecnologias de web development.</div>
                    <div className={styles.btn_container}>
                        <a href='https://nubi.live' className={styles.btn_ver}>Visitar</a>
                        <a href='https://github.com/Nubi-Prey/Nubi.live' className={styles.btn_ver}>Github</a>
                    </div>
                </div>
                <div className={styles.card_box}>
                    <Image alt='Nubox' src={nuboxLogo} className={styles.logo}/>
                    <h1>Nubox</h1>
                    <div className={styles.project_desc}>Nubox é um protótipo de um chatbot com IA ultilizando o Deepseek-V3</div>
                    <div className={styles.btn_container}>
                        <a href='https://nubox.vercel.app' className={styles.btn_ver}>Visitar</a>
                        <a href='https://github.com/Nubi-Prey/nubox' className={styles.btn_ver}>Github</a>
                    </div>
                </div>
                <div className={styles.card_box}>
                    <Image alt='Jokenpo Battle' src={jokenpoLogo} className={styles.logo}/>
                    <h1>Jokenpo Battle</h1>
                    <div className={styles.project_desc}>Um "pedra papel tesoura" como todos conhecem. Porém em uma versão com site. (Em breve com suporte Multiplayer)</div>
                    <div className={styles.btn_container}>
                        <a href='https://jokenpo-battle.vercel.app/' className={styles.btn_ver}>Visitar</a>
                        <a href='https://github.com/Nubi-Prey/jokenpo-battle' className={styles.btn_ver}>Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}