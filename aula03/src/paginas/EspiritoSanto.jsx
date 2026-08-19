import {Link} from 'react-router-dom'
export default function EspiritoSanto()
{
    return(
        <div>
            <h1>Estado do Espírito Santo</h1>
            <div className="conteudo">
                <img src="/ES.png" />
                <p>O Espírito Santo está localizado na região Sudeste do Brasil e tem como capital a cidade de Vitória. O estado é conhecido 
                    por suas belas praias, montanhas e pela diversidade de sua natureza. Entre os principais destaques estão as praias do litoral 
                    capixaba, o Parque Nacional do Caparaó e cidades como Vila Velha, famosa pelo Convento da Penha.
                    A economia do Espírito Santo é diversificada, com destaque para a indústria, o comércio, a agricultura, a mineração e a 
                    atividade portuária. O estado é importante na produção de café, frutas e outros produtos agrícolas, além de possuir portos 
                    fundamentais para o transporte de mercadorias. Sua cultura também é marcada por tradições, festas e pratos típicos, como a 
                    famosa moqueca capixaba.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>

        </div>
    )
}