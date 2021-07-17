const { test, expect } = require("@jest/globals")
const calculateTax = require("./index")

test("monthly salary is 6.500.000 and married with 1 child", async () => {
	expect(calculateTax(6500000, "K1")).toBe(750000);
});

test("monthly salary is 25.000.000 and single", async () => {
	expect(calculateTax(25000000, "TK0")).toBe(31900000);
});