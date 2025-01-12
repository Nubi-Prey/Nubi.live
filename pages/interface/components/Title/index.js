import styles from './title.module.css'

export default function title({children}){
    return(
        <h1 className={styles.h1}>
            {children}
        </h1>
    )
}