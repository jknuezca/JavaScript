var library = [{
	title: 'IT',
	category: 'Horror',
	author: 'Stephen King',
	type: 'book',
	status: false
}, {
	title: 'The Bourne Identity',
	category: 'Action',
	author: 'Robert Ludlam',
	type: 'book',
	status: true
}, {
	title: 'National Geographic',
	category: 'Nature',
	type: 'Magazine',
	author: 'Susan Goldberg',
	status: false
}, {
	title: 'Rolling Stone',
	category: 'Music',
	type: 'Magazine',
	author: 'Jann Wenner',
	status: true
}, {
	title: 'The Hunger Games',
	category: 'Action',
	author: 'Suzanne Collins',
	type: 'book',
	status: false
}];

var libraryObject = [];

for (var key in library) {
	libraryObject.push(library[key]);
}


// const result = libraryObject.find( ({ title }) => title === 'The Hunger Games' );
// console.log(result);

// https://www.w3resource.com/javascript-exercises/javascript-object-exercise-4.php