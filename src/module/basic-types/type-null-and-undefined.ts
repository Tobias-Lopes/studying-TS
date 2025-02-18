export const bootstrap = (): void => {
  //null
  let title = null;
  console.log('Title: ', title);
  console.log('Title (if): ', title ? 'verdadeiro' : 'falso');
  console.log('Tipo null: ', typeof title); // bug -> retorna um objeto

  //undefined
  let subtitle = undefined;
  console.log('Subitle: ', subtitle);
  console.log('Subitle (if): ', subtitle ? 'verdadeiro' : 'falso');
  console.log('Tipo undefined: ', typeof subtitle);

  type Page = {
    title: string;
    subtitle?: string;
    handlerPage?: () => void;
  };

  const page: Page = {
    title: 'Curso de JS',
  };

  page.handlerPage = (): void => {
    console.log('Executou a função');
  };

  page.handlerPage;

  console.log('Page subtitle: ', page.subtitle);
  console.log('Page handlerPage: ', page.handlerPage);
  console.log('Page handlerPage: ', page.handlerPage());
};
