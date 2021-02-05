function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  };
  return deliveryOrders
}

function refundOrder(orderNum, deliveryOrders) {
  deliveryOrders.splice((orderNum - 1), 1);
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var items = ""
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i === deliveryOrders.length - 1) {
      items += `${deliveryOrders[i].item}`
    } else {
      items += `${deliveryOrders[i].item}, `
    }
  };
  return items
};

function searchOrder(deliveryOrders, order) {
  var items = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  if (items.includes(order)) {
    return true
  } else {
    return false
  }
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
