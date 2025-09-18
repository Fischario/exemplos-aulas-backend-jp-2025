// const express = require('express') // ERRADO
import express from 'express' // CERTO | Botar "type": "module", no package.json do projeto
const app = express()
const porta = 9999

// - Query params -
// inicializa depois do ? na URL
// ?nome=batata
// ?idade=99
// ?nome=batata&idade=99&etc=etal...

app.get('/exercicio1', (req, res) => {
    res.status(200)
    const { num1, num2 } = req.query
    res.send({
        result: parseFloat(num1) + parseFloat(num2)
    })
})

app.get('/exercicio2', (req, res) => {
    res.status(200)
    const { valorHora, qtdHoras } = req.query
    res.send({ 
        result: parseFloat(valorHora) * parseFloat(qtdHoras)
    })
})

app.get('/exercicio3', (req, res) => {
    res.status(200)
    const { peso1, peso2, peso3, peso4, peso5 } = req.query
    res.send({
        result: (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5)) / 5
    })
})

app.get('/exercicio4', (req, res) => {
    res.status(200)
    const celsius = parseFloat(req.query.celsius)
    res.send({
        result: (9 * celsius + 160) / 5
    })
})

app.get('/exercicio5', (req, res) => {
    res.status(200)
    const milhas = parseFloat(req.query.milhas)
    res.send({
        result: milhas * 1.60934
    })
})

// POST ------------------------------------------------------------------------------

app.use(express.json())

app.post('/post/exercicio1', (req, res) => {
    res.status(200)
    const { num1, num2 } = req.body
    res.send({
        result: parseFloat(num1) + parseFloat(num2)
    })
})

app.post('/post/exercicio2', (req, res) => {
    res.status(200)
    const { valorHora, qtdHoras } = req.body
    res.send({ 
        result: parseFloat(valorHora) * parseFloat(qtdHoras)
    })
})

app.post('/post/exercicio3', (req, res) => {
    res.status(200)
    const { peso1, peso2, peso3, peso4, peso5 } = req.body
    res.send({
        result: (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5)) / 5
    })
})

app.post('/post/exercicio4', (req, res) => {
    res.status(200)
    const celsius = parseFloat(req.body.celsius)
    res.send({
        result: (9 * celsius + 160) / 5
    })
})

app.post('/post/exercicio5', (req, res) => {
    res.status(200)
    const milhas = parseFloat(req.body.milhas)
    res.send({
        result: milhas * 1.60934
    })
})

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})