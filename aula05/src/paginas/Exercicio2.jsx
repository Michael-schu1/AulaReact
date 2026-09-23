import {Link} from "react-router-dom";
import "../App.css";
import {useState} from "react"; 
export default function Exercicio1()
{

    const hamburgueres = [
        {nome : "Cheeseburger", preco : 25.00},
        {nome : "Bacon Burger", preco : 30.00},
        {nome : "Veggie Burger", preco : 28.00}
    ];

    const tipoServico = [
        {tipo : "Retirada", preco : 0.00},
        {tipo : "Entrega", preco : 10.00}
    ];

    const[hamSelecionado, setHamSelecionado] = useState(-1);
    const[quantidade, setQuantidade] = useState(0);
    const[servicoSelecionado, setServicoSelecionado] = useState(-1);
    const[pedidos, setPedidos] = useState([]);

    function adicionar(){

        if (hamSelecionado >=0)
        {
            const novo = {
                hamburguer : hamburgueres[hamSelecionado].nome,
                quantidade : quantidade,
                preco : hamburgueres[hamSelecionado].preco,
                taxa : servicoSelecionado >= 0 ? tipoServico[servicoSelecionado].preco : 0,
                total : quantidade * hamburgueres[hamSelecionado].preco + (servicoSelecionado >= 0 ? tipoServico[servicoSelecionado].preco : 0)
            }

            setPedidos( [ ...pedidos, novo]);
            setHamSelecionado(-1);
            setQuantidade(0)
        }
        else
        {
            alert("Selecione um hambúrguer !");
        }
    }

    function excluir(index){

            setPedidos ( pedidos.toSpliced(index, 1));
    }

    const totalPedidos = pedidos.reduce(
        (soma, pedido) => soma + pedido.total, 
        0
    );
        
    return (
        <div>
            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>
                    
                    <p>
                        Escolha o seu hambúrguer <br />
                        <select value={hamSelecionado} onChange={(e) => setHamSelecionado(e.target.value)}>
                            <option value="-1">Selecione uma opção</option>
                            
                            {hamburgueres.map(
                            
                                (hamburguer, index) => (
                                    <option value={index}>{hamburguer.nome} - R$ {hamburguer.preco.toFixed(2)}</option>
                                )
                            
                            )}
                            </select>
                             </p>
                             <p>
                                
                                {"Hamburger selecionado: "}{hamSelecionado >= 0 ? hamburgueres[hamSelecionado].nome : "Nenhum hamburguer selecionado"}
                             </p>

                             <p>
                                Digite a quantidade: <br />
                                <input type="number" 
                                        value={quantidade} 
                                        onChange={(e) => setQuantidade(e.target.value)} />
                             </p>

                             <p>
                                Escolha o tipo de serviço <br /> 
                                <select value={servicoSelecionado} onChange={(e) => setServicoSelecionado(e.target.value)}>
                                    <option value="-1">Selecione uma opção</option>
                                    
                                    {tipoServico.map(
                                    
                                        (servico, index) => (
                                            <option value={index}>{servico.tipo} - R$ {servico.preco.toFixed(2)}</option>
                                        )
                                    
                                    )}
                                    </select>
                                </p>
                                <p>
                        Serviço selecionado: {" "}
                        {servicoSelecionado >= 0 
                            ? `${tipoServico[servicoSelecionado].tipo} (Taxa: R$ ${tipoServico[servicoSelecionado].preco.toFixed(2)})`  
                            : "Nenhum serviço selecionado"}
                    </p>
                    <p>
                        <input type="button" 
                                value="Adicionar"
                                onClick={adicionar}
                        />
                    </p>
                </form>

                {pedidos.length > 0 ? (
                    
                    <table>
                        <tr>
                            <th>Hambúrguer</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Taxa</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {pedidos.map(
                        
                            (pedido, index) => (
                                <tr>
                                    <td>{pedido.hamburguer}</td>
                                    <td>{pedido.quantidade}</td>
                                    <td>${pedido.preco.toFixed(2)}</td>
                                    <td>${pedido.taxa.toFixed(2)}</td>
                                    <td>${pedido.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() =>excluir(index)}>Excluir</a>
                                    </td>
                                </tr>
                            )
    
                        )}
                    </table>


                ) :  "Nenhum pedido realizado!" }
                
                <p>
                    Total dos pedidos: R$ {totalPedidos.toFixed(2)}
                </p>
                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}