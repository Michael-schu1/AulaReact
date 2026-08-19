import {Link} from 'react-router-dom'
export default function SaoPaulo()
{
    return(
        <div>
            <h1>Estado de São Paulo</h1>
            <div className="conteudo">
                <img src="/SP.png" />
                <p>O estado de São Paulo está localizado na região Sudeste do Brasil e é um dos mais importantes estados do país.
                    Sua capital é a cidade de São Paulo, uma das maiores cidades da América Latina. O estado possui grande diversidade
                    cultural, com influências de diferentes povos, além de belas paisagens naturais, praias, serras e áreas de 
                    Mata Atlântica.
                    São Paulo também se destaca por sua forte economia, sendo um dos principais centros industriais, comerciais, 
                    agrícolas e tecnológicos do Brasil. Entre suas atividades econômicas estão a indústria, o comércio, os serviços, 
                    a agricultura e o turismo. Além disso, o estado possui importantes universidades, centros de pesquisa e atrações
                    culturais, contribuindo para seu destaque nacional e internacional.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}