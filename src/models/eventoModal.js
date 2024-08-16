import conn from "../config/conn.js"

const tableEventos = /*sql*/ `
CREATE TABLE IF NOT EXISTS eventos(
evento_id VARCHAR(60) PRIMARY KEY, 
titulo VARCHAR(255) NOT NULL,
data DATE NOT NULL
);
`
conn.query(tableEventos, (err, result, field) => {
    if (err) {
        console.error("Erro ao criar a tabela" + err.stack)
        return
    }

    console.log("Tabela [Eventos] criada com sucesso")
})