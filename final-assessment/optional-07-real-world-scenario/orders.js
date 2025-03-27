function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

function addOrder(customerName, items) {
  if (!customerName || typeof customerName !== "string") {
    console.error("Nama pelanggan harus berupa string yang valid.");
    return;
  }
  if (!Array.isArray(items) || items.length === 0) {
    console.error("Pesanan harus berisi setidaknya satu item.");
    return;
  }
  
  const totalPrice = items.reduce((sum, item) => {
    if (!item.name || typeof item.name !== "string" || typeof item.price !== "number" || item.price < 0) {
      console.error("Item tidak valid:", item);
      return sum;
    }
    return sum + item.price;
  }, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(newOrder);
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    console.error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
    return;
  }
  order.status = status;
}

function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === "Selesai")
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

function deleteOrder(id) {
  const initialLength = orders.length;
  orders = orders.filter(order => order.id !== id);
  if (orders.length === initialLength) {
    console.error(`Pesanan dengan ID ${id} tidak ditemukan.`);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
