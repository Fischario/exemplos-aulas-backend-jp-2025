import servicesExercicios from "../services/exercicios.js"

export default new class ControllerExercicio {
    postExercicio1(req, res) {
        try {
            const { num1, num2 } = req.body
            res.send({
                result: servicesExercicios.Somar(parseFloat(num1), parseFloat(num2))
            }).status(200)
        }
        catch (error) {
            res.send({
                msg: error.message
            }).status(400)
        }
    }
    
    postExercicio2(req, res) {
        const { valorHora, qtdHoras } = req.body
        res.send({ 
            result: servicesExercicios.Salario(parseFloat(valorHora), parseFloat(qtdHoras))
        }).status(200)
    }
    
    postExercicio3(req, res) {
        const { peso1, peso2, peso3, peso4, peso5 } = req.body
        res.send({
            result: servicesExercicios.Media(parseFloat(peso1), parseFloat(peso2), parseFloat(peso3), parseFloat(peso4), parseFloat(peso5))
        }).status(200)
    }
    
    postExercicio4(req, res) {
        const celsius = parseFloat(req.body.celsius)
        res.send({
            result: servicesExercicios.Fahrenheit(celsius)
        }).status(200)
    }
    
    postExercicio5(req, res) {
        const milhas = parseFloat(req.body.milhas)
        res.send({
            result: servicesExercicios.Kilometros(milhas)
        }).status(200)
    }
}