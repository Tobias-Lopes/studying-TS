export const bootstrap = (): void => {
  interface Article {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  }

  type ArticleType = {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  };

  interface PartialArticle extends Partial<Article> {}
  type PartialArticleType = Partial<Article>;

  let draft: PartialArticle = {
    title: 'utilizando o partial',
  };

  draft.subtitle = 'Utilizando as propriedade opcionais';

  console.log(draft);
};
