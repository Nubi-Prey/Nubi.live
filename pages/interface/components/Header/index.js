import { Box } from "@primer/react"
import Image from 'next/image'
import logo from '/public/favicon.svg'
import styles from './styles.module.css'

function Header(){

    return (
        <header className={styles.header}>
            
            <Image src={logo} width='auto' className={styles.image}/>

            <h1 className={styles.h1}>
                Programador TOP 1<br/>do bairro
            </h1>

            <a className={styles.a} href="https://github.com/Nubi-Prey">
                GitHub
            </a>
            
        </header>
    )
}

export default Header