export default function Eercicio3( {nota1, nota2} ) {

    let media = Number(nota1) + Number(nota2) / 2;
    const resltado = media >= 6 ? "Aprovado" : "Reprovado";

    return(
        <div> 
           <p>A media das notas é {media} e a situação do aluno é {resltado}</p>
        </div>
    )

}