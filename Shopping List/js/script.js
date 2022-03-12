var shoppingListArray = [];

const shoppingListObject = [
    { milk: 2 }, 
    { sugar: 2 }, 
    { oil: 1 }, 
    { rice: 5 }, 
    { biscuits: '3 packs' }, 
    { chicken: '1 kilo' }
];
// shoppingListArray = Object.entries(shoppingListObject);
shoppingListArray = Object.keys(shoppingListObject).map(function (key) {
    return shoppingListObject[key];
});

const shoppingListObject1 = [
    { milk: 2 }, 
    { sugar: 2 }, 
    { oil: 1 }, 
    { rice: 5 }, 
    { biscuits: '3 packs' }, 
    { chicken: '1 kilo' },
    { cheeze: 2 }
];
