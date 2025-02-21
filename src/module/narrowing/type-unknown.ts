export const bootstrap = (): void => {
  let valueUnknown: unknown; //tipo desconhecido
  //valueUnknown = [1, 2, 3];
  //valueUnknown = { a: 1, b: 2 };
  //valueUnknown = 'Curso de JavaScript';
  valueUnknown = 42.75;
  //let valueAny: any; //pode assumir qualquer tipo

  function processDataWithUnknown(value: unknown) {
    if (Array.isArray(value)) {
      value.map((item) => console.log(item));
    }

    if (value instanceof Object) {
      if ('b' in value) {
        console.log(value.b);
      }
    }

    if (typeof value === 'string') {
      console.log(value.toUpperCase);
    }

    if (typeof value === 'number') {
      console.log(value.toFixed(0));
    }
  }

  processDataWithUnknown(valueUnknown);
};
