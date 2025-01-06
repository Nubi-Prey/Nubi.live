import Image from 'next/image'
import logo from '/public/favicon.svg'
import styles from './styles.module.css'

export default function Header(){

    return (
        <header className={styles.header}>
            
            <Image alt='nubi_logo' src={logo} width='auto' className={styles.image}/>

            <h1 className={styles.h1}>
                Programador TOP 1<br/>
                <span className={styles.span}>do bairro</span>
            </h1>

            <a className={styles.a} href="https://github.com/Nubi-Prey">
                GitHub
            </a>
            
        </header>
    )
}