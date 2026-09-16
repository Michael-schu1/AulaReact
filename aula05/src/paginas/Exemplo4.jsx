import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react";

export default function Exemplo4()
{
    const [pizzas, setPizzas] = useState([
        {nome : "Pizza de Mussarela", preco : 50.00},
        {nome : "Pizza de Calabresa", preco : 54.00},
        {nome : "Pizza de Lombinho",  preco : 59.00}
    ]);

    const[pizzaSelecionada, setPizzaSelecionada] = useState(-1);
    const[quantidade, setQuantidade] = useState(0);
    const[pedidos, setPedidos] = useState([]);
    
    function adicionar()
    {
        if (pizzaSelecionada >= 0) 
        {
            const novo = {
                pizza : pizzas[pizzaSelecionada].nome,
                quantidade : quantidade,
                preco : pizzas[pizzaSelecionada].preco,
                total : quantidade * pizzas[pizzaSelecionada].preco
            }
            setPedidos( [ ...pedidos, novo]);
            setPizzaSelecionada(-1);
            setQuantidade(0)
        }
        else
        {
            alert("Selecione uma pizza !");
        }
    }

    function excluir(index)
    {
            setPedidos ( pedidos.toSpliced(index, 1));
    }

    const totalPedidos = pedidos.reduce(
        (soma, pedido) => soma + pedido.total, 
        0
    );
    
    return (
        <div>
            <h1>Exemplo 4</h1>

            <div className="conteudo">

                <form>
                    
                    <p>
                        Escolha a sua pizza <br />
                        <select value={pizzaSelecionada} onChange={(e) => setPizzaSelecionada(e.target.value)}>
                            <option value="-1">Selecione uma opção</option>
                            
                            {pizzas.map(

                                (pizza, index) => (
                                    <option value={index}>{pizza.nome} - R$ {pizza.preco.toFixed(2)}</option>
                                )
                            )}
                        </select>
                    </p>

                    <p>
                        A pizza selecionada é {pizzaSelecionada} <br />
                        {pizzaSelecionada >= 0 ? pizzas[pizzaSelecionada].nome :"Não pizza selecionada!"}
                    </p>

                    <p>
                        Digite a quantidade de pizzas <br />
                        <input type="number"
                               value={quantidade}
                               onChange={(e) => setQuantidade (e.target.value )} />
                    </p>

                    <p>
                        <input type="button"
                               value="Adicionar"
                               onClick={adicionar} />
                    </p>
                </form>
                {pedidos.length > 0 ? (
                    <table>
                        <tr>
                            <th>Pizza</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {pedidos.map(

                            (pedido, index) => (
                                <tr>
                                    <td>{pedido.pizza}</td>
                                    <td>{pedido.quantidade}</td>
                                    <td>${pedido.preco.toFixed(2)}</td>
                                    <td>${pedido.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() =>excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                ) : "Não há pedidos."}     

                <p>
                    O valor total dos pedidos é {totalPedidos.toFixed(2)}.
                </p>      

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}