// https://www.epicurious.com/recipes/food/views/classic-yellow-cake-with-chocolate-frosting

var cake = {
    name: 'Butter Cake',
    desc: 'cream butter and sugar',
    ingredients: {
        flour: '3 cups',
        bakingPowder: '1 tbsp.',
        kosherSalt: '3/4 tsp.',
        wholeMilk: '1 cup',
        unsaltedButter: '3/4 cup',
        eggYolks: '6'
    }
};

cakeListArray = Object.entries(cake.ingredients);
// console.log(cakeListArray);

/* - - - - - - - - - - - - - - - - - - - */

for (var key of Object.keys(cake.ingredients)) {
    console.log(key);
    // console.log(`${cake[key]}`);
}

/* - - - - - - - - - - - - - - - - - - - */

const cakeTally = cakeListArray.reduce((currentTally, currentIng) => {
    currentTally[currentIng] = (currentTally[currentIng] || 0) + 1
    return currentTally
}, {});

console.log(cakeTally); //Tally of ingredients

/* - - - - - - - - - - - - - - - - - - - */
const index = cakeListArray.indexOf(cakeListArray[0]);
if (index > -1) {
    cakeListArray.splice(index, 1);
}

console.log(cakeListArray); //log of deleted ingredient index[0]

/* - - - - - - - - - - - - - - - - - - - */

function resolve(obj, path) {
    let root = obj = [obj];
    path = [0, ...path];
    while (path.length > 1)
        obj = obj[path.shift()];
    return [obj, path[0], root];
}
Object.get = (obj, path) => {
    let [parent, key] = resolve(obj, path);
    return parent[key];
};

cake.ingredients['bakingPowder']= '2 tbsp.';
console.log( Object.get(cakeListArray,[0]) );//takes a string and a number
console.log(cake); //['bakingPowder']= '2 tbsp.' changed from 1 tbsp.

/* - - - - - - - - - - - - - - - - - - - */

Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }
  Object.byString(cake, 'ingredients');