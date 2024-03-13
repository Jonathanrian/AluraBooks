import styled from 'styled-components';

const Opcoo = styled.li`
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA SACOLA'];

function OpcaoesHeader (){
    return (
        <Opcoes>
            {textoOpcoes.map( (texto) =>(
                <Opcoo><p>{texto}</p></Opcoo>
            ))}
        </Opcoes>
    )
}

export default OpcaoesHeader;