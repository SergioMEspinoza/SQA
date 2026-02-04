import { expect, test } from 'vitest'
import { suma } from '../src/suma.js'

test('sumar 7 + 11 es igual a 18', () => {
  expect(suma(7, 11)).toBe(18)
})
