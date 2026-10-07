
import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio2()
{  
    //1. Criar um array de objetos com os tipos de pizzas e seus respectivos preços.
    const[pizzas, setPizzas] = useState([
        {nome: "Mussarela", preco: 20.00},
        {nome: "Calabresa", preco: 25.00},
        {nome: "Portuguesa", preco: 30.00},
        {nome: "Frango com Catupiry", preco: 35.00},
        {nome: "Quatro Queijos", preco: 40.00},
    ]);

    //2. Criar um array de objetos com os tipos de entrega e seus respectivos preços.
    const [tipoEntrega, setTipoEntrega] = useState([
        {tipo: "Retirada", preco: 0},
        {tipo: "Entrega", preco: 10},
    ]);

    const[pizzaSelecionada, setPizzaSelecionada] = useState(-1);
    const[quantidade, setQuantidade] = useState("");
    const[tipoEntregaSelecionado, setTipoEntregaSelecionado] = useState(0);
    
    const[vendas, setVendas] = useState([]);

    function adicionar()
    {
        if (pizzaSelecionada >= 0){
            const novo = {
                pizza         : pizzas[pizzaSelecionada].nome,
                tipo          : tipoEntrega[tipoEntregaSelecionado].tipo,
                quantidade    : quantidade,
                preco         : pizzas[pizzaSelecionada].preco,
                precoEntrega  : tipoEntrega[tipoEntregaSelecionado].preco,
                total         : (pizzas[pizzaSelecionada].preco * quantidade) + tipoEntrega[tipoEntregaSelecionado].preco,
            };

            setVendas([...vendas, novo]);

            setPizzaSelecionada(-1);
            setQuantidade("");
            setTipoEntregaSelecionado(0);
        }
        else{
            alert("Selecione uma pizza !")
        }
    }

    function excluir(index)
    {
        setVendas(vendas.toSpliced(index,1));
    }

    const totalVendas = vendas.reduce(
        (soma, venda) => soma + venda.total,
        0
    );

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Escolha a pizza <br />

                        <select
                            value={pizzaSelecionada}
                            onChange={(e)=>setPizzaSelecionada(e.target.value)}
                        >
                            <option value="-1">Escolha a pizza</option>

                            {pizzas.map(
                                (pizza, index) => (
                                    <option value={index}>
                                        {pizza.nome} - R$ {pizza.preco.toFixed(2)}
                                    </option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        {pizzaSelecionada >= 0
                            ? pizzas[pizzaSelecionada].nome
                            : "não selecionada"}
                    </p>

                    <p>
                        Digite a quantidade <br />

                        <input
                            type="number"
                            value={quantidade}
                            onChange={(e)=>setQuantidade(e.target.value)}
                        />
                    </p>

                    <p>
                        Escolha o tipo de entrega <br />

                        <select
                            value={tipoEntregaSelecionado}
                            onChange={(e)=>setTipoEntregaSelecionado(e.target.value)}
                        >
                            {tipoEntrega.map(
                                (tipo, index) => (
                                    <option value={index}>
                                        {tipo.tipo} - R$ {tipo.preco.toFixed(2)}
                                    </option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        <input
                            type="button"
                            value="Adicionar"
                            onClick={adicionar}
                        />
                    </p>

                </form>

                {vendas.length > 0 ? (
                    <table>

                        <tr>
                            <th>Pizza</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Preço entrega</th>
                            <th>Total</th>
                            <th>Ações</th>
                        </tr>

                        {vendas.map(
                            (venda, index) => (
                                <tr>
                                    <td>{venda.pizza}</td>
                                    <td>{venda.tipo}</td>
                                    <td>{venda.quantidade}</td>
                                    <td>R$ {venda.preco.toFixed(2)}</td>
                                    <td>R$ {venda.precoEntrega.toFixed(2)}</td>
                                    <td>R$ {venda.total.toFixed(2)}</td>

                                    <td>
                                        <a
                                            href="#"
                                            onClick={() => excluir(index)}
                                        >
                                            Excluir
                                        </a>
                                    </td>
                                </tr>
                            )
                        )}

                    </table>
                ) : "Não há vendas cadastradas."}

                <p>
                    O valor total da venda é R$ {totalVendas.toFixed(2)}.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}

