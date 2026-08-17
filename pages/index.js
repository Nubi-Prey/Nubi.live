import Header from '@/Header';
import Projetos from '@/Projetos'
import AboutMe from '@/AboutMe'
import styles from './styles.module.css'
import { getPinnedProjects } from '../lib/github'


export default function Home({ projects }){
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <AboutMe/>
                <Projetos projects={projects}/>
            </main>
        </>
    )
}

export async function getStaticProps(){
    const projects = await getPinnedProjects()

    return {
        props: { projects },
        revalidate: 3600,
    }
}
