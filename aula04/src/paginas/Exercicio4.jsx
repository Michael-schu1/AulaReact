import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio4()
{
    const[base, setBase] = useState();
    const[altura, setAltura] = useState();
    const[resultado, setResultado] = useState();

    function calcular(){
        let area = (Number(base) * Number(altura)) / 2;
        setResultado(
            <p>A Área do triângulo é {area}</p>
        )
    }
    return (
        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite o valor da base do triângulo <input type="number" value={base} onChange={(e) => setBase(e.target.value)} />
                    </p>
                    <p>
                        Digite o valor da altura do triângulo <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </p>
                    <p><input type="button" value="Calcular" onClick={calcular} />
                    </p>
                    <p>{resultado}</p>
                </form>


                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}