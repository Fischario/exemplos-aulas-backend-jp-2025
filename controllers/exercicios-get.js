import { salario, somar } from "../services/exercicios"

export const getExercicio1 = (req, res) => {
    const { num1, num2 } = req.query
    res.send({
        result: somar(parseFloat(num1), parseFloat(num2))
    }).status(200)
}

export const getExercicio2 = (req, res) => {
    const { valorHora, qtdHoras } = req.query
    res.send({ 
        result: salario(parseFloat(valorHora), parseFloat(qtdHoras))
    }).status(200)
}

export const getExercicio3 = (req, res) => {
    const { peso1, peso2, peso3, peso4, peso5 } = req.query
    res.send({
        result: (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5)) / 5
    }).status(200)
}

export const getExercicio4 = (req, res) => {
    const celsius = parseFloat(req.query.celsius)
    res.send({
        result: (9 * celsius + 160) / 5
    }).status(200)
}

export const getExercicio5 = (req, res) => {
    const milhas = parseFloat(req.query.milhas)
    res.send({
        result: milhas * 1.60934
    }).status(200)
}