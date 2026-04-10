import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Formulario() {
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    aluno: "",
    orientador: "",
    status: "",
    data_inicio: ""
  });

  const [salvo, setSalvo] = useState(false); 

  const navigate = useNavigate();
  const { id } = useParams();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    if (id) {
      axios.put(`http://localhost:3001/projetos/${id}`, form)
        .then(() => setSalvo(true));
    } else {
      axios.post("http://localhost:3001/projetos", form)
        .then(() => setSalvo(true));
    }
  }

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/projetos/${id}`)
        .then(res => setForm(res.data));
    }
  }, [id]);

  return (
    <div className="form-container">

      {salvo ? (
        <div className="sucesso">
          <h2>Salvo com sucesso!</h2>
          <button onClick={() => navigate("/")} className="btn-voltar">
            Voltar
          </button>
        </div>
      ) : (
        <>
          <h2>{id ? "Editar Projeto" : "Novo Projeto"}</h2>

          <input name="titulo" placeholder="Título" onChange={handleChange} value={form.titulo} className="input" />
          <input name="aluno" placeholder="Aluno" onChange={handleChange} value={form.aluno} className="input" />
          <input name="orientador" placeholder="Orientador" onChange={handleChange} value={form.orientador} className="input" />
          <input name="status" placeholder="Status" onChange={handleChange} value={form.status} className="input" />
          <input name="data_inicio" type="date" onChange={handleChange} value={form.data_inicio} className="input" />

          <textarea name="descricao" placeholder="Descrição" onChange={handleChange} value={form.descricao} className="input textarea"></textarea>

          <button onClick={salvar} className="btn-salvar">
            Salvar
          </button>
        </>
      )}

    </div>
  );
}

export default Formulario;