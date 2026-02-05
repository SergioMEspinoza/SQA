import { describe, expect, it} from 'vitest'
import { adicion } from '../src/suma.js'


describe('operaciones matemáticas', () =>{

    it('sumar 7 + 11 es igual a 18', () => {
    expect(adicion(7, 11)).toBe(18)
    })

    it('sumar 2 + 2 es igual a 4', () => {
    expect(adicion(2, 2)).toBe(4)
    })

})
