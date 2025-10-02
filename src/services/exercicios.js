export default new class ServicesExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('num é numéro rapaix')
        }
        // função ajeitada para corrigir o float defeituoso do JavaScript
        const result = (num1 * 100) + (num2 * 100)
        return result / 100
    }
    
    Salario(valorHora, qtdHoras) {
        return valorHora * qtdHoras
    }
    
    Media(peso1, peso2, peso3, peso4, peso5) {
        return (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    }
    
    Fahrenheit(celsius) {
        return (9 * celsius + 160) / 5
    }
    
    Kilometros(milhas) {
        return milhas * 1.60934
    }
}