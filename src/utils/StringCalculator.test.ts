import { StringCalculator } from "./StringCalculator";
import { describe, expect, test, beforeEach } from "@jest/globals";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should return sum for multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
});
