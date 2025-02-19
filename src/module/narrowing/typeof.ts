export const bootstrap = (): void => {
  const x = 'teste';
  console.log('string', typeof x);
  console.log('number', typeof 123);
  console.log('bigint', typeof 123n);
  console.log('Symbol', typeof Symbol('teste'));
  console.log('Undefined', typeof undefined);
  console.log('object', typeof {});
  console.log('object', typeof Object());
  console.log('array (object)', typeof []);
  console.log('null (object)', typeof null);
  console.log('function: ', typeof function () {});
};
