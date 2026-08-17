import styles from './styles.module.css'
import avatar from 'public/images/avatar.jpg'
import localFont from 'next/font/local'
import Image from 'next/image'
import { InstaLogo, Css, Discord, Firebase, HtmlLogo, Javascript, Mongodb, NextJs, NodeJS, Postgresql, Python, ReactLogo, GithubLogo } from '@/icons'
import { getYearsSince } from '../../../../lib/date'

const integralcf = localFont({ src: '../../../../public/fonts/integralcf.otf'})

const BIRTH_DATE = new Date(2006, 6, 20, 0)
const FIRST_COMMIT_DATE = new Date(2020, 7, 10, 0)

export default function AboutMe(){
    const age = getYearsSince(BIRTH_DATE)
    const yearsOfExperience = getYearsSince(FIRST_COMMIT_DATE)

    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div className={styles.perfil}>
                        <Image src={avatar} alt='Avatar' className={styles.avatar}/>
                        <span className={styles.name +' '+ integralcf.className}>MURILO</span>
                        <div className={styles.mention_box}>
                            <div className={styles.mention}><InstaLogo className={styles.mention_icon}/> <a className={styles.text}href='https://www.instagram.com/murilo_alves.sc/'>@murilo_alves.sc</a></div>
                            <div className={styles.mention}><GithubLogo className={styles.mention_icon}/> <a className={styles.text} href='https://github.com/Nubi-Prey'>@Nubi-Prey</a></div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        &emsp;Meu nome é Murilo, sou um desenvolvedor back-end de {age} anos e {yearsOfExperience} anos de experiência de programação como hobby. Atuo nas linguagens Python, Javascript e Java.<br/><br/>
                        &emsp;Tenho experiência em Desenvolvimento Web, Gerenciamento de Banco de Dados e Automaçoes para Discord.<br/><br/>
                        &emsp;Além de minhas competências técnicas, estou sempre buscando aprender novas tecnologias e habilidades para me manter atualizado.
                    </div>
                </div>
                
                <div className={styles.animation}>
                    <div className={styles.cards}>
                        <Javascript className={styles.icon}/> <HtmlLogo className={styles.icon}/> <Css className={styles.icon}/> <Discord className={styles.icon}/> <Firebase className={styles.icon}/> <Mongodb className={styles.icon}/> <NextJs className={styles.icon}/> <NodeJS className={styles.icon}/> <Postgresql className={styles.icon}/> <Python className={styles.icon}/> <ReactLogo className={styles.icon}/>
                    </div>
                    <div className={styles.cards}>
                        <Javascript className={styles.icon}/> <HtmlLogo className={styles.icon}/> <Css className={styles.icon}/> <Discord className={styles.icon}/> <Firebase className={styles.icon}/> <Mongodb className={styles.icon}/> <NextJs className={styles.icon}/> <NodeJS className={styles.icon}/> <Postgresql className={styles.icon}/> <Python className={styles.icon}/> <ReactLogo className={styles.icon}/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
