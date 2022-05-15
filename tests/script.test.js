import capitalize from "../code/capitalize";

describe("Takes a string and returns it with the first character capitalized", () => {
	test("String of characters", () => {
		expect(capitalize("testing")).toBe("Testing");
	});

	test("String of numbers", () => {
		expect(capitalize("123")).toBe("123");
	});

	test("Is undefined", () => {
		expect(capitalize(undefined)).toBe("");
	});

	test("Is null", () => {
		expect(capitalize(null)).toBe("");
	});
});
