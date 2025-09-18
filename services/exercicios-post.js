export const postExercicio1 = (req, res) => {
    res.status(200)
    const { num1, num2 } = req.body
    res.send({
        result: parseFloat(num1) + parseFloat(num2)
    })
}

export const postExercicio2 = (req, res) => {
    res.status(200)
    const { valorHora, qtdHoras } = req.body
    res.send({ 
        result: parseFloat(valorHora) * parseFloat(qtdHoras)
    })
}

export const postExercicio3 = (req, res) => {
    res.status(200)
    const { peso1, peso2, peso3, peso4, peso5 } = req.body
    res.send({
        result: (parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4) + parseFloat(peso5)) / 5
    })
}

export const postExercicio4 = (req, res) => {
    res.status(200)
    const celsius = parseFloat(req.body.celsius)
    res.send({
        result: (9 * celsius + 160) / 5
    })
}

export const postExercicio5 = (req, res) => {
    res.status(200)
    const milhas = parseFloat(req.body.milhas)
    res.send({
        result: milhas * 1.60934
    })
}