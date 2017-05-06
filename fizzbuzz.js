function fizzBuzz() {
	for (var i=0; i <= 100; i++) {
		if (i % 3 === 0) {
			console.log("fizz")
		}
		if (i % 5 ===  0) {
			console.log("buzz")
		} 
		if (i % 15 === 0) {
			console.log("fizz buzz")
		}
		else {
			console.log(i)
		}
	}
}