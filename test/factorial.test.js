import { describe, expect, it} from 'vitest'
import {factorial } from '../src/factorial.js'


describe('ejemplos de factoriales', () =>{

    it('El factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120)
    })

    it('El factorial de 7 es 5040', () => {
    expect(factorial(7)).toBe(5040)
    })
})