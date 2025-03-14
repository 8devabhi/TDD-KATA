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

  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("should throw exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });

  test("should return the number of times add() was called", () => {
    calculator.add("1,2");
    calculator.add("3,4");
    calculator.add("5,6");
  
    expect(calculator.getCalledCount()).toBe(3);
  });

  test("should ignore numbers greater than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  test("should support delimiters of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  test("should support multiple delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should support multiple multi-character delimiters", () => {
    expect(calculator.add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});
