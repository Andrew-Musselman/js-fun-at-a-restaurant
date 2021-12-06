function createRestaurant(name) {
  var restaurant = {
    name: `${name}`,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return restaurant
}

function addMenuItem(restaurant, menuItem, num) {
  var x = menuItem.type
if (!restaurant.menus[x].includes(menuItem)){
  restaurant.menus[x].push(menuItem);
}
  return restaurant.menus[x][num];
}


function removeMenuItem(restaurant, menuItem, menuType) {

  if (menuType === 'breakfast'){
    for (var i = 0; i < restaurant.menus.breakfast.length; i++){
      if (menuItem === restaurant.menus.breakfast[i].name){
        restaurant.menus.breakfast.splice(i, 1)
        return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
    }
  } if (menuType === 'lunch'){
      for (var i = 0; i < restaurant.menus.lunch.length; i++){
        if (menuItem === restaurant.menus.lunch[i].name){
          restaurant.menus.lunch.splice(i, 1)
          return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
    }
  } if (menuType === 'dinner'){
      for (var i = 0; i < restaurant.menus.dinner.length; i++){
        if (menuItem === restaurant.menus.dinner[i].name){
          restaurant.menus.dinner.splice(i, 1)
          return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
    }
  }
  else {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
