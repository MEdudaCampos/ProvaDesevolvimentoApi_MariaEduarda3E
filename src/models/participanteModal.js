import conn from "../config/conn.js"

const tableParticipantes = /*sql*/ `
CREATE TABLE IF NOT EXISTS participantes(
participante_id VARCHAR(60) PRIMARY KEY, 
nome VARCHAR(255) NOT NULL
);
`
conn.query(tableParticipantes, (err, result, field) => {
    if (err) {
        console.error("Erro ao criar a tabela" + err.stack)
        return
    }

    console.log("Tabela [Participantes] criada com sucesso")
})