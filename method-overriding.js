class CoffeeMachine {
	makeCoffee(){
		console.log('making coffee...');
	}
}

class SpecialCoffeMachine extends CoffeeMachine {
	makeCoffee(cb){
		// hàm makeCoffe này sẽ viết đè lên hàm cũ
		console.log('making coffee and do something...');
		cb();
	}
}

const coffeeMachine = new SpecialCoffeMachine();
coffeeMachine.makeCoffee(function() {
	console.log('Call the boss');
});