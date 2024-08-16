import conn from '../config/conn.js';
import { v4 as uuidv4 } from 'uuid';
import { request, response } from "express"

export const getEventos = (request, response) => {
    const sql = `SELECT * FROM eventos`;
    conn.query(sql, (err, data) => {
        if (err) {
            console.error(err)
            response.status(500).json({ message: "Erro ao buscar Eventos" })
            return
        }
        const eventos = data
        response.status(200).json(eventos)
    })
}

export const criarEventos = (request, response) => {
    const { titulo, date } = request.body

    if (!titulo) {
        response.status(400).json({ message: "O titulo é obrigatorio" })
        return
    }
    if (!date) {
        response.status(400).json({ message: "A data é obrigatorio" })
        return
    }

    const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ? AND ?? = ?`
    const checkSqlData = ["titulo", titulo, "data", date]

    conn.query(checkSql, checkSqlData, (err, data) => {
        if (err) {
            response.status(500).json({ message: "Erro ao casdastar Evento" })
            return;
        }

        if (data.length > 0) {
            response.status(409).json({ message: "Esse Evento já está cadastrado" });
            return;
        }


        const id = uuidv4()

        const insertSql = /*sql*/`INSERT INTO eventos (??, ??, ??) VALUES (?, ?, ?)`
        const insertData = ["evento_id", "titulo", "data", id, titulo, date]

        conn.query(insertSql, insertData, (err) => {
            if (err) {
                response.status(500).json({ message: "Erro ao cadastrar Evento" });
            }
           response.status(201).json({ message: "Evento cadastrado" })

        })
    })
}