// cách viết constructor function
function Mouse(name){
	this.name = name;
}

Mouse.prototype.run = function(){
	console.log(`${this.name} is running`);
}

//  cách viết lại bằng class
class Mouse {
	constructor(name){
		this.name = name;
	}

	run(){
		console.log(`${this.name} is running`);
	}
}

const mouse = new Mouse();
mouse.run();

// inheritance nghĩa là sự thừa kế

class Animal {
	constructor(name){
		this.name = name;
	}

	eat(){
		console.log(`Eating...`);
	}
}

class Bird extends Animal {
	fly() {
		console.log('Flying.......');
	}
}

class Parrot extends Bird {
	speak() {
		console.log('Speaking.......');
	}
}

const bird = new Parrot('Rio');
bird.speak();

// ----------------------------------------------------
// cách viết inheritance bằng constructor function

function Animal(name,age) {
	this.name = name;
  	this.age = age;
}

Animal.prototype.eat = function() {
	console.log('Eating....');
}

function Bird(name,age) {
	Animal.apply(this, arguments);
	//Animal.call(this, name, age);
}

Bird.prototype = new Animal();

const bird = new Bird('Rio',10);
console.log(bird.name, bird.age);
bird.eat();