import styles from './styles.module.css'
import Title from '@/Title'
import ProjectCard from '@/ProjectCard'
import logo from '/public/favicon.svg'
import nuboxLogo from '/public/images/nubox.svg'
import jokenpoLogo from '/public/images/jokenpo-battle-round.svg'

const projects = [
    {
        logo,
        alt: 'Nubi.Live',
        title: 'Nubi.live',
        description: 'Nubi.live é meu primeiro site, criado com o intuito de me aprofundar nas tecnologias de web development.',
        visitLink: 'https://nubi.live',
        githubLink: 'https://github.com/Nubi-Prey/Nubi.live',
    },
    {
        logo: nuboxLogo,
        alt: 'Nubox',
        title: 'Nubox',
        description: 'Nubox é um protótipo de um chatbot com IA ultilizando o Deepseek-V3',
        visitLink: 'https://nubox.vercel.app',
        githubLink: 'https://github.com/Nubi-Prey/nubox',
    },
    {
        logo: jokenpoLogo,
        alt: 'Jokenpo Battle',
        title: 'Jokenpo Battle',
        description: 'Um "pedra papel tesoura" como todos conhecem. Porém em uma versão com site. (Em breve com suporte Multiplayer)',
        visitLink: 'https://jokenpo-battle.vercel.app/',
        githubLink: 'https://github.com/Nubi-Prey/jokenpo-battle',
    },
]

export default function Projetos(){
    return(
        <section className={styles.projetos}>

            <Title>Projetos</Title>
            <div className={styles.cards} id='projetos'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}