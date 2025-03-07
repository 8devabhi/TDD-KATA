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
});
