import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio1()
{  
    
    const [quartos, setQuartos] = useState ([
        {nome : "Standard" ,       preco : 180},
        {nome : "Luxo" ,           preco : 260},
        {nome : "Familía" ,        preco :320},
        {nome : "Suite Master",    preco: 390}
    ])

    const [nome, setNome] = useState();
    const [dias, setDias] = useState(0);
    const[quartoSelecionado, setQuartoSelecionado] = useState(-1);


    const [vendas, setVenda] = useState([]);


    function reservar(){

         if( quartoSelecionado >= 0 )
        {
            let subtotal = Number(quartos[quartoSelecionado].preco) * Number(dias); 
            let desconto = subtotal * 10/100;
            let total = subtotal - desconto;

            const novo ={
               
                hospede:  nome,
                quarto :  quartos[quartoSelecionado].nome,
                diaria:   quartos[quartoSelecionado].preco,
                diarias:  dias,
                desconto : desconto,
                total: total,
            };

            setVenda ([...vendas, novo]);

            setQuartoSelecionado(-1);
            setDias(0);
            setNome("");

        }
        else{
            alert("Selecione um quarto!")
        }


        
    };

    function excluir(index){
        setVenda (vendas.toSpliced(index,1));
    }

    const totalVendas = vendas.reduce(
        (soma, venda) => soma + venda.total,
        0
    );
    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o nome do hóspede <br />
                        <input type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                    </p>

                    <p>
                        Escolha o tipo de quarto <br />
                        <select 
                            value={quartoSelecionado}
                            onChange={(e) =>setQuartoSelecionado (e.target.value)}>
                            <option value="-1">Escolha o quartos </option>
                                
                                {quartos.map(
                                    (quarto, index) => (
                                        <option value={index}>{quarto.nome}</option>
                                    )
                                )}
                            </select>

                            <p>
                                {quartoSelecionado >=0 ? quartos[quartoSelecionado].nome : "Não selecionado "}
                            </p>
                    </p>

                    <p>
                        Digite o numero de diarias <br />
                        <input type="number"
                                value={dias}
                                onChange={(e) => setDias(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Reservar" onClick={reservar} />
                    </p>
                </form>

               {vendas.length > 0 ? (
                 <table>
                    <tr>
                        <th>Hospede</th>
                        <th>Quarto</th>
                        <th>Diaria Valor</th>
                        <th>Diarias</th>
                        <th>Desconto</th>
                        <th>Total</th> 
                        <th></th>
                    </tr>

                    {vendas.map(
                        (venda, index) => (
                            <tr>
                                <td>{venda.hospede}</td>
                                <td>{venda.quarto}</td>
                                <td>{venda.diaria.toFixed(2)}</td>
                                <td>{venda.diarias}</td>
                                <td>{venda.desconto.toFixed(2)}</td>
                                <td>{venda.total.toFixed(2)}</td>
                                <td>
                                    <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                </td>
                            </tr>
                        )
                    )}
                </table>
               ): "Não há registro de vendas de diaria !"}
               
            <p>
                Quantidade de reservas {vendas.length} <br />
                O valor total da venda é de {totalVendas.toFixed(2)}
            </p>
  
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
