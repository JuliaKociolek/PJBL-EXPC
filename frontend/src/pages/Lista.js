import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Lista() {
  const [dados, setDados] = useState([]);
  const [idExcluir, setIdExcluir] = useState(null);
  const location = useLocation();

  function carregar() {
    axios.get("http://localhost:3001/projetos")
      .then(res => setDados(res.data))
      .catch(err => console.log(err));
  }

  function confirmarExclusao() {
    axios.delete(`http://localhost:3001/projetos/${idExcluir}`)
      .then(() => {
        setIdExcluir(null);
        carregar();
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    carregar();
  }, [location]);

  return (
    <div className="container">
      <h1>Julia Machado Kociolek</h1>
      <h2>Gestão de Projetos</h2>

      <Link to="/novo" className="btn-novo">Novo Projeto</Link>

      {dados.length === 0 ? (
        <p>Nenhum projeto cadastrado</p>
      ) : (
        dados.map(p => (
          <div key={p.id} className="card">
            <h3>{p.titulo}</h3>
            <p>{p.aluno}</p>

            <Link to={`/detalhe/${p.id}`} className="btn-view">
              Ver detalhes
            </Link>

            <Link to={`/editar/${p.id}`} className="btn-edit">
              Editar
            </Link>

            <button
              className="btn-delete"
              onClick={() => setIdExcluir(p.id)}
            >
              Excluir
            </button>
          </div>
        ))
      )}

      {/* ✅ MODAL TEM QUE FICAR AQUI DENTRO */}
      {idExcluir && (
        <div className="modal">
          <div className="modal-box">
            <h3>Excluir projeto?</h3>
            <p>Essa ação não pode ser desfeita.</p>

            <div className="modal-botoes">
              <button className="btn-delete" onClick={confirmarExclusao}>
                Excluir
              </button>

              <button className="btn-voltar" onClick={() => setIdExcluir(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lista;