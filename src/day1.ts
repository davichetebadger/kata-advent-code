import fs from "fs";

export default function calculateTheFuel(mass: number) {
  return Math.floor(mass / 3) - 2;
}

export const parseString = (fileContent: string) =>
  fileContent.split("\n").map((value) => parseInt(value));

export const getFuelRequirementsSum = (fileName: string) => {
  const fileContent = fs.readFileSync(fileName).toString();
  const numbers = parseString(fileContent);

  return numbers.reduce((prev, curr) => prev + calculateTheFuel(curr), 0);
};
