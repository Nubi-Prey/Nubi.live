import styles from './styles.module.css'
import Title from '@/Title'
import ProjectCard from '@/ProjectCard'

export default function Projetos({ projects = [] }){
    return(
        <section className={styles.projetos}>

            <Title>Projetos</Title>
            <div className={styles.cards} id='projetos'>
                {projects.map(({ icon, ...project }) => (
                    <ProjectCard key={project.title} logo={icon} {...project} />
                ))}
            </div>
        </section>
    )
}