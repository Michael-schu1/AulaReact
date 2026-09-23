import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
export default function Exercicio2() {

    const sessoes = [
        { nome: "Sessão Matinê", preco: 18.00 },
        { nome: "Sessão 2D", preco: 28.00 },
        { nome: "Sessão 3D", preco: 34.00 },
        { nome: "Sessão 2D VIP", preco: 45.00 },
        { nome: "Sessão 3D VIP", preco: 52.00 }
    ];

    const tipoIngresso = [
        { tipo: "Inteira", desconto: 0 },
        { tipo: "Meia-entrada", desconto: 50 },
        { tipo: "Promossional", desconto: 30 }
    ];

    const [sessaoSelecionada, setSessaoSelecionada] = useState(-1);
    const [tipoSelecionado, setTipoSelecionado] = useState(-1);
    const [quantidade, setQuantidade] = useState(0);
    const [escolhas, setEscolhas] = useState([])


    //sessaoSelecionada >= 0 ? tipoIngresso[tipoSelecionado].desconto : 0,
    function adicionar() {

        

        if (sessaoSelecionada >= 0) {
            const novo = {
                sessao      : sessoes[sessaoSelecionada].nome,
                tipo        : tipoIngresso[tipoSelecionado].tipo,
                quantidade  : quantidade,
                preco       : sessoes[sessaoSelecionada].preco,
                desconto    : tipoIngresso[tipoSelecionado].desconto,
                total       : (quantidade * sessoes[sessaoSelecionada].preco) * (1 - tipoIngresso[tipoSelecionado].desconto /100)
            };

            

            setEscolhas([...escolhas, novo]);
            setSessaoSelecionada(-1);
            setQuantidade(0);
            setTipoSelecionado(-1)

        }

        else {
            alert("Selecine uma Sessão !")
        }
    }

    function excluir(index) {
        setEscolhas(escolhas.toSpliced(index, 1));

    }

    const totalVenda = escolhas.reduce(
        (soma, escolha) => soma + escolha.total, 0
    );


    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">


                <form>
                    <p>
                        Escolha a sessão <br />
                        <select value={sessaoSelecionada} onChange={(e) => setSessaoSelecionada(e.target.value)}>

                            <option value="-1">Selecione uma opção</option>

                            {sessoes.map(

                                (sessao, index) => (
                                    <option value={index}> {sessao.nome} - R$ {sessao.preco.toFixed(2)} </option>
                                )

                            )}
                        </select>
                    </p>
                    <p>
                        {sessaoSelecionada >= 0 ? sessoes[sessaoSelecionada].nome : "Nenhuma sessão selecionada"}
                    </p>
                    <p>
                        Digite a quantidade: <br />
                        <input type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)} />
                    </p>

                    <p>
                        Escolha o tipo de ingresso  <br />
                        <select value={tipoSelecionado} onChange={(e) => setTipoSelecionado(e.target.value)}>
                            <option value="-1">Selecione uma opção</option>

                            {tipoIngresso.map(

                                (ingresso, index) => (
                                    <option value={index}>{ingresso.tipo} - %{ingresso.desconto.toFixed(1)} </option>
                                )
                            )}
                        </select>
                    </p>
                    <p>
                        Tipo selecionado:{" "}
                        {tipoSelecionado >= 0
                            ? `${tipoIngresso[tipoSelecionado].tipo} Desconto % ${tipoIngresso[tipoSelecionado].desconto.toFixed(1)}`
                            : "Nenhum tipo selecionado"}
                    </p>.
                    <p>
                        <input type="button"
                            value="Adicionar"
                            onClick={adicionar}
                        />
                    </p>


                </form>

                {escolhas.length > 0 ? (
                    <table>
                        <tr>
                            <th>Sessão</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        {escolhas.map(

                            (escolha, index) => (
                                <tr>
                                    <td>{escolha.sessao}</td>
                                    <td>{escolha.tipo}</td>
                                    <td>{escolha.quantidade}</td>
                                    <td>{escolha.preco.toFixed(2)}</td>
                                    <td>{escolha.desconto.toFixed(2)}</td>
                                    <td>{escolha.total.toFixed(2)}</td>
                                    <td>
                                        <a href="#" onClick={() => excluir(index)}> Excluir </a>
                                    </td>
                                </tr>
                            )
                            )}
                    </table>
                ) : "Nenhuma escolha realizada"}


                <p>
                    Total da venda é: R$ {totalVenda.toFixed(2)}
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
