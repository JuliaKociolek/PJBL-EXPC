const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projetos_academicos"
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL conectado");
});

app.get("/projetos", (req, res) => {
    db.query("SELECT * FROM projetos", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

app.get("/projetos/:id", (req, res) => {
    db.query("SELECT * FROM projetos WHERE id=?", [req.params.id], (err, result) => {
        if (err) return res.json(err);
        res.json(result[0]);
    });
});

app.post("/projetos", (req, res) => {
    const { titulo, descricao, aluno, orientador, status, data_inicio } = req.body;

    if (!titulo || !aluno) {
        return res.status(400).json({ erro: "Campos obrigatórios" });
    }

    const sql = "INSERT INTO projetos (titulo, descricao, aluno, orientador, status, data_inicio) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [titulo, descricao, aluno, orientador, status, data_inicio], (err) => {
        if (err) return res.json(err);
        res.json({ mensagem: "Criado com sucesso" });
    });
});

app.put("/projetos/:id", (req, res) => {
    const { titulo, descricao, aluno, orientador, status, data_inicio } = req.body;

    const sql = "UPDATE projetos SET titulo=?, descricao=?, aluno=?, orientador=?, status=?, data_inicio=? WHERE id=?";

    db.query(sql, [titulo, descricao, aluno, orientador, status, data_inicio, req.params.id], (err) => {
        if (err) return res.json(err);
        res.json({ mensagem: "Atualizado" });
    });
});

app.delete("/projetos/:id", (req, res) => {
    db.query("DELETE FROM projetos WHERE id=?", [req.params.id], (err) => {
        if (err) return res.json(err);
        res.json({ mensagem: "Deletado" });
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});