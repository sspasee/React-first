import { useState } from 'react'
import logo from '/logo-name.png'
import { styled } from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`
height: 50px;
display: flex;
padding: 0 2em;
justify-content: space-between;
border-bottom: 1px solid #ccc;
background: #fafafa;
border-radius:20px;
`

export default function Header() {
    const [now, setNow] = useState(new Date())
 
    
    



setInterval(() => setNow(new Date()), 1000); 
// я реализовывал через componentDidMount

    return (
        <HeaderContainer>
         <img id='giga' src={logo} alt='Result' />
        <span>{now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}