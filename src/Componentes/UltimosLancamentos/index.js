import styled from "styled-components"
import { livros } from "./dadosUltimosLoncamentos"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from "../../Imagens/livro2.png"


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
    return (

        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00'
                tamanho="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            { livros.map( livro => (
                <img src={livro.src}/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você tenha interesse por"
                subtitulo="Angula 11"
                descricao="Construindo uma aplicação com com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
       
        
    )
}

export default UltimosLancamentos