import calculateTheFuel, {
  getFuelRequirementsSum,
  parseString,
} from "../src/day1";

test("Should've returned the number divided by 3, rounded down and substracted 2 when calculateTheFuel for one mass", () => {
  const mass = 12;

  const requiredFuel = calculateTheFuel(mass);

  expect(requiredFuel).toBe(2);
});

test("Given the file content, we should parse it and create a list with numbers", () => {
  const fileContent = `12
14
234
1243324
342534`;

  const result = parseString(fileContent);

  const expected = [12, 14, 234, 1243324, 342534];
  expect(result).toStrictEqual(expected);
});

test("Given the file, then the sum of the fuel requirements is returned", () => {
  const file = "inputs/day1Test";

  const result = getFuelRequirementsSum(file);

  const expectedResult = 8;
  expect(result).toBe(expectedResult);
});

// For example:

//     For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
//     For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
//     For a mass of 1969, the fuel required is 654.
//     For a mass of 100756, the fuel required is 33583.
