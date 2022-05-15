function reverseString(str) {
	if (str) {
		return str.split("").reverse().join("");
	}
	return "";
}

export default reverseString;
