export const bootstrap = (): void => {
  function throwError(message: string): never {
    throw new Error(message);
  }

  //throwError('Aplicação interrompida! Erro interno.');
  console.log('Continuação...');
  console.log('Continuação...');
  console.log('Continuação...');

  function infiniteLoop(): never {
    let total: number = 0;
    while (true) {
      const inputText = prompt('Digite um valor numérico');
      if (inputText) {
        const inputNumber = parseFloat(inputText);
        if (!isNaN(inputNumber)) {
          total += inputNumber;
          console.log(total);
        }
      }
    }
  }

  //infiniteLoop();
  console.log('Continuação...');
  console.log('Continuação...');
  console.log('Continuação...');

  //fim do fluxo
};
