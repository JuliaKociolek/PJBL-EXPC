import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Detalhe() {
  const [projeto, setProjeto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/projetos/${id}`)
      .then(res => setProjeto(res.data));
  }, [id]);

  return (
    <div className="form-container">
      <h2>Detalhes do Projeto</h2>

      <p><b>Título:</b> {projeto.titulo}</p>
      <p><b>Aluno:</b> {projeto.aluno}</p>
      <p><b>Orientador:</b> {projeto.orientador}</p>
      <p><b>Status:</b> {projeto.status}</p>
      <p>
  <b>Data de Início:</b>{" "}
  {projeto.data_inicio &&
    new Date(projeto.data_inicio).toLocaleDateString("pt-BR")}
</p>
      <p><b>Descrição:</b></p>
      <p>{projeto.descricao}</p>

      <button onClick={() => navigate("/")} className="btn-voltar">
        Voltar
      </button>
    </div>
  );
}

export default Detalhe;