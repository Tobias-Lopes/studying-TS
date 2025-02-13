//let numbers: readonly number[] = [10, 20, 30, 40, 50];
//let numbers: ReadonlyArray<number> = [10, 20, 30, 40, 50];

let numbers: readonly [number, number, number, number, number] = [
  10, 20, 30, 40, 50,
];

//numbers[0] = 30;

let numbersCopy = numbers.map((item) => item * 2);

console.log(numbers);
console.log(numbersCopy);

export default () => {};
