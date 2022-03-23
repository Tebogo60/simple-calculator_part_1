const simpleCalculator = require("../src/simple-calculator.js");

describe("Add and return sum", () => {
  it("should return 15", () => {
    const result = simpleCalculator.add(1, 2, 3, 4, 5);
    expect(result).toBe(15);
  });
  it("should still return 3", () => {
    const result = simpleCalculator.add(1, 2);
    expect(result).toBe(3);
  });
  it("should still return -2", () => {
    const result = simpleCalculator.add(-1, -1);
    expect(result).toBe(-2);
  });
});

describe("Multiply and return product", () => {
  it("should return 120", () => {
    const result = simpleCalculator.multiply(1, 2, 3, 4, 5);
    expect(result).toBe(120);
  });
  it("should still return 3", () => {
    const result = simpleCalculator.multiply(1, 3);
    expect(result).toBe(3);
  });
  it("should still return -3", () => {
    const result = simpleCalculator.multiply(-1, 3);
    expect(result).toBe(-3);
  });
});
