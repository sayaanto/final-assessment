import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Menambahkan pesanan
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

console.log("Pesanan setelah ditambahkan:", JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

const aliceOrderId = orders[0].id; // Simpan ID Alice
const bobOrderId = orders[1].id; // Simpan ID Bob

updateOrderStatus(aliceOrderId, 'Diproses');
updateOrderStatus(bobOrderId, 'Selesai');

console.log("Pesanan setelah diperbarui:", JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

console.log("Total pendapatan dari pesanan selesai:", calculateTotalRevenue());

/**
 * Output yang diharapkan:
 * 25000
 */

deleteOrder(aliceOrderId); // Menghapus pesanan Alice

console.log("Pesanan setelah dihapus:", JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
