export const bootstrap = (): void => {
  /*
    const title: symbol = Symbol('HOME');
  const pageTitle: symbol = Symbol('HOME');

  if (title === pageTitle) {
    console.log('Sim, são iguais');
  } else {
    console.log('são diferentes');
  }
    */

  const titleSymbol: symbol = Symbol('title');

  const Page = {
    title: 'HOME',
    [titleSymbol]: 'Página principal',
  };

  console.log(Page.title);
  console.log(Page[titleSymbol]);

  console.log(Page);
};
