import Image from 'next/image'
import logo from '/public/favicon.svg'
import styles from './styles.module.css'

export default function Header(){

    return (
        <header className={styles.header}>
            <a className={styles.a} href='#projetos'>
                Projetos
            </a>

            <Image alt='nubi_logo' src={logo} width='auto' className={styles.image}/>

            <a className={styles.a} href="https://github.com/Nubi-Prey">
                GitHub
            </a>
            
        </header>
    )
}