import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('penjumlahan 5 dan 10 menghasilkan angka 15', () => {
  assert.strictEqual(sum(5, 10), 15);
});
test('penjumlahan -3 dan 6 menghasilkan angka 3', () => {
  assert.strictEqual(sum(-3, 6), 3);
});
test('penjumlahan -4 dan -7 menghasilkan angka -11', () => {
  assert.strictEqual(sum(-4, -7), -11);
});
test('penjumlahan 0 dan 12 menghasilkan angka 12', () => {
  assert.strictEqual(sum(0, 12), 12);
});
