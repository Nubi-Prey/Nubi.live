import {Box} from '@primer/react'
import Header from '@/Header';

export default function Home(){
    return (
        <Box>
            <Header></Header>

            <Box as='main' 
                sx={{
                    padding: '3',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor:'#1F1F1F'
                }}>

                <Box as='div' sx={{margin:0}}>
                    <h1>"Uva roxa, leu porque é trouxa"</h1>
                    <h2>— Eduardo, Carlos</h2>
                </Box>

            </Box>
        </Box>
    )
}
