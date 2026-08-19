import {Link} from 'react-router-dom'
export default function RioJaneiro()
{
    return(
            <div>
                <h1>Estado do Rio de Janeiro</h1>
                <div className="conteudo">
                    <img src="/RJ.png" />
                    <p>O estado do Rio de Janeiro está localizado na região Sudeste do Brasil e tem como capital a cidade do Rio de Janeiro.
                        É conhecido mundialmente por suas belas paisagens, praias, montanhas e pontos turísticos, como o Cristo Redentor e o 
                    Pão de Açúcar. O estado também possui uma grande diversidade cultural, marcada pela música, pelo carnaval e pelas tradições
                    de diferentes povos.
                    A economia do Rio de Janeiro é bastante diversificada, com destaque para os setores de petróleo e gás, turismo, indústria, 
                    comércio e serviços. O estado também possui importantes centros culturais, universidades e áreas de preservação ambiental.
                    Por sua riqueza natural e cultural, o Rio de Janeiro é um dos principais destinos turísticos do Brasil e tem grande importância
                    econômica e histórica para o país.
                    </p>
                    <p>
                        <Link to="/">Voltar</Link>
                    </p>
            </div>
        </div>
    )
}