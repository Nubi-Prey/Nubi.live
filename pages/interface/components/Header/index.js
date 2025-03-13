import Image from 'next/image'
import logo from '/public/favicon.svg'
import styles from './styles.module.css'

export default function Header(){

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a className={styles.link} href='#projetos'>
                    <span className='btn_span'>Projetos</span>
                </a>

                <Image alt='nubi_logo' src={logo} width='auto' className={styles.image}/>

                <a className={styles.link} href="https://github.com/Nubi-Prey">
                    <span className='btn_span'>Github</span>
                </a>
            </div>
            
            
        </header>
    )
}