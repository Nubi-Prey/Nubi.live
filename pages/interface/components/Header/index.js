import { Box } from "@primer/react"
import Image from 'next/image'
import logo from '/public/favicon.svg'

function Header(){

    return (
        <Box as='header'
            sx={{
                backgroundColor: '#202021',
                borderBottomStyle: 'solid',
                borderBottomColor: '#505060',
                borderBottomWidth:'2px',
                display:'flex',
                height:'82px',
                justifyContent:'space-around',
                alignItems:'center'}
            }>
            
            <Image src={logo} width='auto' height='50'/>

            <Box as='h1' sx={{color:'#e5e5e5'}}>
                Programador TOP 1 do bairro
            </Box>

            <Box as='a' href="https://github.com/Nubi-Prey"
                sx={{
                    fontSize:'30px',
                    color:'#ad9d9d'
                }}>
                GitHub
            </Box>
            
        </Box>
    )
}

export default Header