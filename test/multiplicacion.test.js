import { describe, expect, it} from 'vitest'
import { mult } from '../src/multiplicacion.js'


describe('ejemplos de multiplicación', () =>{

    it('La multiplicación de 17 por 4 es 68', () => {
    expect(mult(17, 4)).toBe(68)
    })

    it('La multiplicación de 39 por 7 es 273', () => {
    expect(mult(39, 7)).toBe(273)
    })
})