import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio2()
{    

    const[pizzas, setPizzas] = useState([
        {nome : "Mussarela"           , preco : 35.00},
        {nome : "Calabresa"           , preco : 35.00},
        {nome : "Portuguesa"          , preco : 35.00},
        {nome : "Frango com Catupiry" , preco : 35.00},
        {nome : "Quatro Queijos"      , preco : 35.00},
    ]);

    const[opcao, setOpcao] = useState ([
        {nome : "Retirada" , preco : 0.00},
        {nome : "Entrega"  , preco : 8.00}
    ]);

    const[pizzaSelecionada, setPizzaSelecionada] = useState (-1);
    const[quantidade, setQuantidade] = useState(0);
    const[opcaoSelecionade, setOpcaoSelecionada]= useState (0);


    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Escolha a pizza <br />
                        <select
                        value={pizzaSelecionada}
                        onChange={(e)=>setPizzaSelecionada(e.target.value)}>
                            <option value="-1">Escolha o sabor da pizza</option>
                        </select>

                    </p>

                    <p>
                        Digite a quuantidade de pizzas <br />
                        <input type="number" value={quantidade} on onChange={(e)=>setQuantidade(e.target.value)} />
                    </p>
                    
                    <p>
                        Escolha a opçaõ de entrega <br />
                        <select
                        value={opcaoSelecionade}
                        onChange={(e)=>setOpcaoSelecionada(e.target.value)}>
                            
                        </select>
                    </p>

                    <p>
                        <input type="button" value="Adicionar" / >
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
