export const getExercicio1 = (req, res) => {
    res.status(200)
    const { num1, num2 } = req.query
    res.send({
        result: parseFloat(num1) + parseFloat(num2)
    })
}

export const getExercicio2 = (req, res) => {
    res.status(200)
    const { valorHora, qtdHoras } = req.query
    res.send({ 
        result: parseFloat(valorHora) * parseFloat(qtdHoras)
    })
}

export const getExercicio3 = (req, res) => {
    res.status(200)
    const { peso1, peso2, peso3, peso4, peso5 } = req.query
    res.send({
        result: (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5)) / 5
    })
}

export const getExercicio4 = (req, res) => {
    res.status(200)
    const celsius = parseFloat(req.query.celsius)
    res.send({
        result: (9 * celsius + 160) / 5
    })
}

export const getExercicio5 = (req, res) => {
    res.status(200)
    const milhas = parseFloat(req.query.milhas)
    res.send({
        result: milhas * 1.60934
    })
}