import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio10()
{
    const [valorHora, setValorHora] = useState();
    const [horasTrabalhadas, setHorasTrabalhadas] = useState();
    const [resultado, setResultado] = useState();

    function calcular(){
        let salario = Number(valorHora) * Number(horasTrabalhadas);

        setResultado(
            <p>O salário é {salario.toFixed(2)}</p>
        )
    }

    return (
        <div>

            <h1>Exercício 10</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o valor da hora trabalhada <input type="number" value={valorHora} onChange={(e) => setValorHora(e.target.value)} />
                    </p>
                    <p>
                        Digite a quantidade de horas trabalhadas <input type="number" value={horasTrabalhadas} onChange={(e) => setHorasTrabalhadas(e.target.value)} />
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