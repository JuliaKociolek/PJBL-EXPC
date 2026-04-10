CREATE DATABASE projetos_academicos;
USE projetos_academicos;

CREATE TABLE projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150),
    descricao TEXT,
    aluno VARCHAR(100),
    orientador VARCHAR(100),
    status VARCHAR(50),
    data_inicio DATE
);

INSERT INTO projetos (titulo, descricao, aluno, orientador, status, data_inicio)
VALUES
('Sistema de IA', 'Uso de IA em software', 'Julia Machado Kociolek', 'Prof. Carlos', 'Em andamento', '2026-04-01');