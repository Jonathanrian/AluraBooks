import logo from '../../Imagens/logo.svg'
import styled from 'styled-components';

const LogoImg = styled.img`
    margin-right: 10px;
    margin-left: 10px;
`

const LogoStyled = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`

function Logo() {
    return(
        <LogoStyled>
            <LogoImg
                src={logo} 
                alt='logo da alura'
            ></LogoImg>
            <p><strong>Alura</strong>Books</p>
        </LogoStyled>
    )
}

export default Logo;