export default function Exercicio5( {quantidade}) {

    let salarioBruto = Number(quantidade) * 150;
    let desc = salarioBruto * 0.08;
    let salarioLiquido =  salarioBruto - desc;

    return (
        <p>Quantidade: {quantidade}
        <br /> 
        Salario Bruto: R$ {salarioBruto}
        <br />
        Desconto: R$ {desc}
        <br />
        Salario Liquido: R$ {salarioLiquido}         
        </p>
    )

}