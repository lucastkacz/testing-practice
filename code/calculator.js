function add(a, b) {
	if (_isNumber(a, b)) {
		return a + b;
	}
    return null
}

function subtract(a, b) {
	if (_isNumber(a, b)) {
		return a - b;
	}
    return null
}

function multiply(a, b) {
	if (_isNumber(a, b)) {
		return a * b;
	}
    return null
}

function divide(a, b) {
	if (_isNumber(a, b) && b != 0) {
		return a / b;
	}
    return null
}

function _isNumber(...args) {
	return args.every((element) => {
		return typeof element === "number";
	});
}

export { add, subtract, divide, multiply };
