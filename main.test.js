import { test, expect } from "@jest/globals";
import { bmi } from "./main.js";

//👉 Write your tests below here:

test("less than or equal to 18.5 should return 'Underweight'", () => {
  expect(bmi(50, 1.7)).toBe("Underweight");
});

test("less than or equal to 25 should return 'Normal'", () => {
  expect(bmi(70, 1.75)).toBe("Normal");
});

test("less than or equal to 30 should return 'Overweight'", () => {
  expect(bmi(85, 1.8)).toBe("Overweight");
});

test("above 30 should return 'Obese'", () => {
  expect(bmi(100, 1.7)).toBe("Obese");
});
