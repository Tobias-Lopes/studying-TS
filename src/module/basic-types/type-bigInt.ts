export const bootstrap = (): void => {
  console.log('Int - Max Safe: ', Number.MAX_SAFE_INTEGER);
  console.log('Int - Min Safe: ', Number.MIN_SAFE_INTEGER);

  let bigIntNumber: bigint =
    900719925474099190071992547409919007199254740991900719925474099190071992547409919007199254740991n;
  console.log('Atribuição com o sufixo n: ', bigIntNumber.toString);

  let bigIntNumber2: bigint = BigInt(
    '900719925474099190071992547409919007199254740991900719925474099190071992547409919007199254740991',
  );
  console.log('Atribuição com o construtor bigInt: ', bigIntNumber2);
};
