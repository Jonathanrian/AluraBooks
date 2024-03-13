import Logo from "../Logo";
import OpcaoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;

`

function Header () {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcaoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}
export default Header;