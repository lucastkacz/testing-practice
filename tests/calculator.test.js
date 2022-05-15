import { add, subtract, multiply, divide } from "../code/calculator";

describe("Takes two numbers and performs calculations", () => {
	test("Addition", () => {
		expect(add(1, 2)).toBe(3);
	});

	test("Addition with non numbers", () => {
		expect(add("t", null)).toBe(null);
	});

	test("Subtraction", () => {
		expect(subtract(1, 2)).toBe(-1);
	});

	test("Multiplication", () => {
		expect(multiply(1, 2)).toBe(2);
	});

	test("Division", () => {
		expect(divide(1, 2)).toBe(0.5);
	});

	test("Division by zero", () => {
		expect(divide(1, 0)).toBe(null);
	});
});
