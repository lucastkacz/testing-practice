import caesarCipher from "../code/caesarCipher";

describe("Takes two numbers and performs calculations", () => {
	test("Test 1", () => {
		expect(caesarCipher("greetings", 0)).toBe("greetings");
	});
	test("Test 1", () => {
		expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
	});
	test("Test 1", () => {
		expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
			"o xkgrre tkkj zu yrkkv kgxre zutomnz!"
		);
	});
	test("Test 1", () => {
		expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
	});
});
