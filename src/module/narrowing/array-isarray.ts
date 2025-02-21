export const bootstrap = (): void => {
  const arr: number[] | undefined = [1, 2, 3];
  //let arr: number[] | undefined;

  console.log('typeof de array: ', typeof arr);
  console.log('instanceof de array: ', arr instanceof Array);
  console.log('Array.isarray(): ', Array.isArray(arr));

  if (Array.isArray(arr)) {
    arr.map((item) => {
      console.log(item);
    });
  }
};
