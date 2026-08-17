import Image from 'next/image'
import styles from './styles.module.css'

export default function ProjectCard({ logo, alt, title, description, visitLink, githubLink }){
    return (
        <div className={styles.card_box}>
            <Image alt={alt} src={logo} className={styles.logo}/>
            <h1>{title}</h1>
            <div className={styles.project_desc}>{description}</div>
            <div className={styles.btn_container}>
                <a href={visitLink} className={styles.btn_ver}>Visitar</a>
                <a href={githubLink} className={styles.btn_ver}>Github</a>
            </div>
        </div>
    )
}
