import { fetchServices } from 'src/api/api'
import {assert, expect, test } from 'vitest'

test('Services' , () => {
  expect(fetchServices).toBeDefined()
})