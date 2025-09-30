export function somar(num1, num2) {
    // função ajeitada para corrigir o float defeituoso do JavaScript
    const result = (num1 * 100) + (num2 * 100)
    return result / 100
}

export function salario(valorHora, qtdHoras) {
    return valorHora * qtdHoras
}

export function media(peso1, peso2, peso3, peso4, peso5) {
    return (peso1 + peso2 + peso3 + peso4 + peso5) / 5
}

export function fahrenheit(celsius) {
    return (9 * celsius + 160) / 5
}

export function kilometros(milhas) {
    return milhas * 1.60934
}