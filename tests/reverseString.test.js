import reverseString from "../code/reverseString";

describe("Takes a string and returns it reversed", () => {
	test("String of characters", () => {
		expect(reverseString("testing")).toBe("gnitset");
	});

	test("String of numbers", () => {
		expect(reverseString("123")).toBe("321");
	});

	test("Is undefined", () => {
		expect(reverseString(undefined)).toBe("");
	});

	test("Is null", () => {
		expect(reverseString(null)).toBe("");
	});
});
