import "dotenv/config"
import express from "express"

import conn from "./config/conn.js"

import "./models/palestranteModal.js"
import "./models/participanteModal.js"
import "./models/eventoModal.js"

import routePalestrantes from "./routes/palestranteRoutes.js"
import routeEventos from "./routes/eventoRoutes.js"

const PORT = process.env.PORT;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/eventos/palestrantes', routePalestrantes )
app.use('/eventos/criar', routeEventos)

app.listen(PORT, () => {
    console.log("Servidor on port " + PORT)
})