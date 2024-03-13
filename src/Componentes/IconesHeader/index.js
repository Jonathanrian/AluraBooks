import perfil from '../../Imagens/perfil.svg'
import sacola from '../../Imagens/sacola.svg'
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [perfil, sacola];

function IconesHeader (){
    return (
        <Icones>
            {icones.map ( (icone) =>(
                <Icone>
                    <img src={icone} alt='icone de uma sacola'></img>
                </Icone>
            ))}
        </Icones>

    )
}

export default IconesHeader; 