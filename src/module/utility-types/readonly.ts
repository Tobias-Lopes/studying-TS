export const bootstrap = (): void => {
  interface Article {
    title: string;
    subtitle?: string;
  }

  const articles: Readonly<Article>[] = [
    { title: 'Omit' },
    { title: 'Partial' },
    { title: 'Required', subtitle: 'Propriedades obrigatórias' },
    { title: 'Readonly', subtitle: 'Propriedades somente leitura' },
  ];

  //articles[1].title = 'Parcial';
  //articles[1].subtitle = 'Propriedades opcionais';

  console.log(articles);
};
