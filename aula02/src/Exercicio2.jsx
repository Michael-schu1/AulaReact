export default function Exercicio2( {peso, altura }) {

    let imc = Number(peso) / (Number(altura) * Number(altura));


    return (
        <div>
            <p>Seu IMC é {imc.toFixed(3)}</p>
        </div>
    );
}
