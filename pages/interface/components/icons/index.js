import Image from 'next/image'
import instasvg from 'public/images/icons/instagram.svg'
import cssSvg from 'public/images/icons/css.svg'
import discordSvg from 'public/images/icons/discord.svg'
import firebaseSvg from 'public/images/icons/firebase.svg'
import htmlSvg from 'public/images/icons/html.svg'
import javascriptSvg from 'public/images/icons/javascript.svg'
import mongodbSvg from 'public/images/icons/mongodb.svg'
import nextjsSvg from 'public/images/icons/next-js.svg'
import nodejsSvg from 'public/images/icons/nodejs.svg'
import postgresqlSvg from 'public/images/icons/postgresql.svg'
import pythonSvg from 'public/images/icons/python.svg'
import reactSvg from 'public/images/icons/react.svg'
import githubSvg from 'public/images/icons/github.svg'

const InstaLogo = ({className}) =>{
    return (<Image alt='Instagram' className={className} src={instasvg}/>)
}

const GithubLogo = ({className}) =>{
    return (<Image alt='Github' className={className} src={githubSvg}/>)
}

const Css = ({className}) =>{
    return (<Image alt='CSS' className={className} src={cssSvg}/>)
}

const Discord = ({className}) =>{
    return (<Image alt='Discord' className={className} src={discordSvg}/>)
}

const Firebase = ({className}) =>{
    return (<Image alt='Firebase' className={className} src={firebaseSvg}/>)
}

const HtmlLogo = ({className}) =>{
    return (<Image alt='HTML' className={className} src={htmlSvg}/>)
}

const Javascript = ({className}) =>{
    return (<Image alt='JavaScript' className={className} src={javascriptSvg}/>)
}

const Mongodb = ({className}) =>{
    return (<Image alt='MongoDB' className={className} src={mongodbSvg}/>)
}

const NextJs = ({className}) =>{
    return (<Image alt='Next.js' className={className} src={nextjsSvg}/>)
}

const NodeJS = ({className}) =>{
    return (<Image alt='Node.js' className={className} src={nodejsSvg}/>)
}

const Postgresql = ({className}) =>{
    return (<Image alt='PostgreSQL' className={className} src={postgresqlSvg}/>)
}

const Python = ({className}) =>{
    return (<Image alt='Python' className={className} src={pythonSvg}/>)
}

const ReactLogo = ({className}) =>{
    return (<Image alt='React' className={className} src={reactSvg}/>)
}




export default ReactLogo

export {InstaLogo, Css, Discord, Firebase, HtmlLogo, Javascript, Mongodb, NextJs, NodeJS, Postgresql, Python, ReactLogo, GithubLogo}
