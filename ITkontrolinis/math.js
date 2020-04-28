(function () {
	function calculateDivide(input) {
        input = input;
        if(input % 3 == 0 && input % 5 == 0 && input % 10 == 0)
        return "Taip, dalinasi";
        else return "Ne, nesidalina";
	}

	var number = document.getElementById("math");
	if (number) {
		number.onsubmit = function () {
			this.result.value = calculateDivide(this.input.value);
			return false;
		};
	}
}());