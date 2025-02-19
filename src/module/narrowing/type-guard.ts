export const bootstrap = (): void => {
  const zipCodeMask = (value: string | number): string => {
    //type guard
    if (typeof value === 'number') {
      value = value.toString();
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    return value;
  };

  const zipCode = zipCodeMask('10000000'); //10000-000
  console.log(zipCode);

  const zipCode2 = zipCodeMask(20000000); //20000-000
  console.log(zipCode2);
};
