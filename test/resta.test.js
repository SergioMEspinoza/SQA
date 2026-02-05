import { describe, expect, it} from 'vitest'
import { res } from '../src/resta.js'


describe('ejemplos de resta', () =>{

    it('La resta de 17 en 4 es 13', () => {
    expect(res(17, 4)).toBe(13)
    })

    it('La resta de 39 en 7 es 32', () => {
    expect(res(39, 7)).toBe(32)
    })
})