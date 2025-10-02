// const express = require('express') // ERRADO
import express from 'express' // CERTO | Botar "type": "module", no package.json do projeto
import router from './routes/exercicios.js'

const porta = 9999

const app = express()

app.use(express.json())

app.use('/api/v1/', router)

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})