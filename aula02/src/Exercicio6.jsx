export default function Exercicio6( {capital, taxa, tempo} ) {
let c=Number(capital);
let tx=Number(taxa);
let t=Number(tempo);
   
let jurosSimples  = c * (1 + tx/100 * t);
let jurosCompostos = c * (1 + tx/100) ** t;

return(
    <p>Capital: R$ {c.toFixed(2)}
        <br /> 
        Taxa: {taxa}%
        <br />
        Tempo: {tempo}
        <br />
        Juros simples:  R$ {jurosSimples.toFixed(2)}
        <br />
        Juros compostos:  R$ {jurosCompostos.toFixed(2)}         
        </p>
)
}
