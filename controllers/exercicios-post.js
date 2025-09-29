import { somar, salario, fahrenheit, kilometros, media } from "../services/exercicios.js"

export const postExercicio1 = (req, res) => {
    const { num1, num2 } = req.body
    res.send({
        result: somar(parseFloat(num1), parseFloat(num2))
    }).status(200)
}

export const postExercicio2 = (req, res) => {
    const { valorHora, qtdHoras } = req.body
    res.send({ 
        result: salario(parseFloat(valorHora), parseFloat(qtdHoras))
    }).status(200)
}

export const postExercicio3 = (req, res) => {
    const { peso1, peso2, peso3, peso4, peso5 } = req.body
    res.send({
        result: media(parseFloat(peso1), parseFloat(peso2), parseFloat(peso3), parseFloat(peso4), parseFloat(peso5))
    }).status(200)
}

export const postExercicio4 = (req, res) => {
    const celsius = parseFloat(req.body.celsius)
    res.send({
        result: fahrenheit(celsius)
    }).status(200)
}

export const postExercicio5 = (req, res) => {
    const milhas = parseFloat(req.body.milhas)
    res.send({
        result: kilometros(milhas)
    }).status(200)
}