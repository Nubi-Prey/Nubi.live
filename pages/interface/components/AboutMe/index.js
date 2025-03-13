import styles from './styles.module.css'
import avatar from 'public/images/avatar.png'
import localFont from 'next/font/local'
import Image from 'next/image'
import { InstaLogo, Css, Discord, Firebase, HtmlLogo, Javascript, Mongodb, NextJs, NodeJS, Postgresql, Python, ReactLogo, GithubLogo } from '@/icons'

const integralcf = localFont({ src: '../../../../public/fonts/integralcf.otf'})

export default function AboutMe(){
    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div className={styles.perfil}>
                        <span className={styles.name +' '+ integralcf.className}>MURILO</span>
                        <div className={styles.mention_box}>
                            <div className={styles.mention}><InstaLogo className={styles.mention_icon}/> <a className={styles.text}href='https://www.instagram.com/murilo_alves.sc/'>@murilo_alves.sc</a></div>
                            <div className={styles.mention}><GithubLogo className={styles.mention_icon}/> <a className={styles.text} href='https://github.com/Nubi-Prey'>@Nubi-Prey</a></div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        &emsp;Meu nome é Murilo, tenho 18 anos e 4 anos de experiência de programação como hobby. Sou um programador back-end com experiência nas linguagens Python e Javascript.<br/><br/>
                        &emsp;Tenho habilidades em NextJS, React, Node.js, Mongo DB, PostgreSQL, Firebase, REST APIs, Discord.JS / Discord.py e um pouco de Desenvolvimento WEB.<br/><br/>
                        &emsp;Além de minhas competências técnicas, estou sempre buscando aprender novas tecnologias e habilidades para me manter atualizado e competente.
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