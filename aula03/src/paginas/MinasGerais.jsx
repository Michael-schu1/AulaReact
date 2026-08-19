import {Link} from 'react-router-dom'
export default function MinasGerais()
{
    return(
        <div>
            <h1>Estado de Minas Gerais</h1>
            <div className="conteudo">
                <img src="/MG.png" />
                <p>Minas Gerais está localizado na região Sudeste do Brasil e tem como capital a cidade de Belo Horizonte. 
                    O estado é conhecido por suas montanhas, cidades históricas e pela riqueza de sua cultura e gastronomia.
                     Entre os principais destaques estão cidades como Ouro Preto, Mariana e Tiradentes, que preservam importantes 
                     construções e tradições do período colonial brasileiro.
                    A economia de Minas Gerais é bastante diversificada, com destaque para a mineração, a agricultura, a pecuária,
                    a indústria e o comércio. O estado é um dos maiores produtores de café, leite e minerais do país. Além disso, 
                    Minas Gerais possui belas paisagens naturais, parques e cachoeiras, sendo também um importante destino turístico
                     e cultural do Brasil.

                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    )
}