import { describe, expect, it } from '@jest/globals'
import { somar } from '../services/exercicios'

describe('Testando função somar', () => {
    it('Somando 2 números positivos', () => {
        const result = somar(1, 2)
        expect(result).toBe(3)
    })
    it('Somando 2 námeros negativos', () => {
        const result = somar(-1, -2)
        expect(result).toBe(-3)
    })
    it('Somando 2 némeros com casa decimal', () => {
        const result = somar(1.2, 2.2)
        expect(result).toBe(3.4)
    })
    it('Somando um nómero com zero', () => {
        const result = somar(1, 0)
        expect(result).toBe(1)
    })
    it('Somando zero com um nímero', () => {
        const result = somar(0, 2)
        expect(result).toBe(2)
    })
})

// ------------------------

// PARA EXECUTAR OS TESTES:
// npm run test