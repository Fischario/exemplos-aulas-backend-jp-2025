// const express = require('express') // ERRADO
import express from 'express' // CERTO | Botar "type": "module", no package.json do projeto
import { getExercicio1, getExercicio2, getExercicio3, getExercicio4, getExercicio5 } from './controllers/exercicios-get.js'
import { postExercicio1, postExercicio2, postExercicio3, postExercicio4, postExercicio5 } from './controllers/exercicios-post.js'

const porta = 9999

const app = express()

app.use(express.json())

// - Query params -
// inicializa depois do ? na URL
// ?nome=batata
// ?idade=99
// ?nome=batata&idade=99&etc=etal...

app.get('/get/exercicio1', getExercicio1)

app.get('/get/exercicio2', getExercicio2)

app.get('/get/exercicio3', getExercicio3)

app.get('/get/exercicio4', getExercicio4)

app.get('/get/exercicio5', getExercicio5)

// POST ------------------------------------------------------------------------------

app.post('/post/exercicio1', postExercicio1)

app.post('/post/exercicio2', postExercicio2)

app.post('/post/exercicio3', postExercicio3)

app.post('/post/exercicio4', postExercicio4)

app.post('/post/exercicio5', postExercicio5)

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})