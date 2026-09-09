import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio9()
{
    const [valorInicial, setValorInicial] = useState();
    const [taxaJuros, setTaxaJuros] = useState();
    const [tempo, setTempo] = useState();
    const [resultado, setResultado] = useState();

    function calcular(){
        let montante = Number(valorInicial) * (1 + Number(taxaJuros)/100) ** Number(tempo);

        setResultado(
            <p>O montante final é {montante.toFixed(2)}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 9</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o valor inicial <input type="number" value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
                    </p>
                    <p>
                        Digite a taxa de juros (em %) <input type="number" value={taxaJuros} onChange={(e) => setTaxaJuros(e.target.value)} />
                    </p>
                    <p>
                        Digite o tempo (em anos) <input type="number" value={tempo} onChange={(e) => setTempo(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>
                    <p>
                        {resultado}
                    </p>
                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}