import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Uji jika kedua angka adalah bilangan positif
test('Menjumlahkan dua angka positif', () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(10, 15), 25);
});

// Uji jika salah satu atau kedua angka adalah negatif
test('Mengembalikan 0 jika salah satu angka negatif', () => {
    assert.strictEqual(sum(-2, 3), 0);
    assert.strictEqual(sum(4, -1), 0);
    assert.strictEqual(sum(-5, -6), 0);
});

// Uji jika salah satu atau kedua input bukan angka
test('Mengembalikan 0 jika input bukan angka', () => {
    assert.strictEqual(sum('5', 3), 0);
    assert.strictEqual(sum(7, '2'), 0);
    assert.strictEqual(sum(true, 2), 0);
    assert.strictEqual(sum(3, null), 0);
    assert.strictEqual(sum(undefined, 4), 0);
    assert.strictEqual(sum({}, []), 0);
});

// Uji jika input adalah angka 0
test('Menjumlahkan angka dengan 0', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(7, 0), 7);
    assert.strictEqual(sum(0, 0), 0);
});

// Uji jika input 0 jika parameter kurang atau lebih dari dua
test('Mengembalikan 0 jika parameter kurang atau lebih dari dua', () => {
    assert.strictEqual(sum(5), 0); 
    assert.strictEqual(sum(), 0);  
    assert.strictEqual(sum(1, 2, 3), 3);
});