import { describe, expect, test } from 'vitest'
import { suma } from '../src/suma.js'


describe('sum', () =>{

    it('sumar 7 + 11 es igual a 18', () => {
    expect(suma(7, 11)).toBe(18)
    })

    it('sumar 2 + 2 es igual a 4', () => {
    expect(suma(2, 2)).toBe(4)
    })

})
