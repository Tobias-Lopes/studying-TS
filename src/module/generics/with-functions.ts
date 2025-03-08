export const bootstrap = (): void => {
  function processAndReturn(value: string | number): string | number {
    return value;
  }

  function processAndReturnGeneric<T, U, X>(n: T, s: U, b: X): string {
    return `Texto: ${n} - ${s} ${b}`;
  }

  const y = processAndReturnGeneric(7, 'x', true);
  console.log(y);

  /*
  const x = processAndReturnGeneric('The Big Bang Theory');
  console.log(x.toUpperCase());

  const y = processAndReturnGeneric(7);
  console.log(y.toFixed());

  const x = processAndReturn('The Big Bang Theory');

  if (typeof x === 'string') {
    console.log(x.toUpperCase());
  }

  const y = processAndReturn(7);
  if (typeof y === 'number') {
    console.log(y.toFixed());
  } */
};
