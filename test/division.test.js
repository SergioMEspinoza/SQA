import { describe, expect, it} from 'vitest'
import { div } from '../src/divison.js'


describe('ejemplos de división', () =>{

    it('La división de 39 entre 13 es igual a 3', () => {
    expect(div(39, 13)).toBe(3)
    })

    it('La división de 21 entre 3 es 7', () => {
    expect(div(21, 3)).toBe(7)
    })
})
