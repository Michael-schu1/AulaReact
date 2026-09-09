import {Link} from "react-router-dom";
import {useState} from "react"; 

export default function Exercicio8()
{
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();


    function calcular(){
        let imc = Number(peso) / (Number(altura) * Number(altura));

        setResultado(
            <p>O IMC é {imc.toFixed(2)}</p>
        )
    }
    return (
        <div>

            <h1>Exercício 8</h1>

            <div className="conteudo">

                <form>
                    <p>
                        Digite o peso (em kg) <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    </p>
                    <p>
                        Digite a altura (em metros) <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
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