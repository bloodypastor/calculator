
var person = {
	name: 'Alex',
	age: 25
};

// вкладеність обєкта в обєкт

var husband = {
	name: 'Pit',
	wife: {
		name: 'Ann',
		age: 23
	   },
	 age: 25
};

var children = Object.create(husband); // створення нового типу від прототипа husband.


//console.log(children.wife);




