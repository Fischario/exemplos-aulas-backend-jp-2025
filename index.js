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
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)
    const result = num1 + num2
    res.send(`Resultado da soma de ${num1} + ${num2} = ${result} `)
})

app.get('/exercicio2', (req, res) => {
    res.status(200)
    const valorHora = parseFloat(req.query.valorHora)
    const qtdHoras = parseFloat(req.query.qtdHoras)
    const valorFinal = valorHora * qtdHoras
    res.send(`R$${valorHora} x ${qtdHoras} horas trabalhadas = ${valorFinal}`)
})

app.get('/exercicio3', (req, res) => {
    res.status(200)
    const peso1 = parseFloat(req.query.peso1)
    const peso2 = parseFloat(req.query.peso2)
    const peso3 = parseFloat(req.query.peso3)
    const peso4 = parseFloat(req.query.peso4)
    const peso5 = parseFloat(req.query.peso5)
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send(`Média: ${media}`)
})

app.get('/exercicio4', (req, res) => {
    res.status(200)
    const celsius = parseFloat(req.query.celsius)
    const fahrenheit = (9 * celsius + 160) / 5
    res.send(`${celsius} graus Celsius em Fahrenheit: ${fahrenheit}`)
})

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})