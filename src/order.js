
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
  return deliveryOrders.push(order);
  }
}


function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++){
    if (orderNumber === deliveryOrders[i].orderNumber) {
    deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var items = []
    for (var i = 0; i < deliveryOrders.length; i++){
       items.push(deliveryOrders[i].item);
  }
  return items.join(', ')
}

function searchOrder(deliveryOrders, item) {
  var itemList = [];
  for (var i = 0; i < deliveryOrders.length; i++){
    itemList.push(deliveryOrders[i].item);
  } if (itemList.includes(item) === true ){
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
}
