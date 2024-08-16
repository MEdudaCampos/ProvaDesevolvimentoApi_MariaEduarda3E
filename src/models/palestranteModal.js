import conn from "../config/conn.js"

const tablePalestrantes = /*sql*/ `
CREATE TABLE IF NOT EXISTS palestrantes(
palestrante_id VARCHAR(60) PRIMARY KEY, 
nome VARCHAR(255) NOT NULL, 
expertise VARCHAR(255) NOT NULL
);
`
conn.query(tablePalestrantes, (err, result, field) => {
    if (err) {
        console.error("Erro ao criar a tabela" + err.stack)
        return
    }

    console.log("Tabela [Palestrantes] criada com sucesso")
})