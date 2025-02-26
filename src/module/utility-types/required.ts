export const bootstrap = (): void => {
  interface Article {
    title?: string;
    subtitle?: string;
    description?: string;
    createdAt?: Date;
    public?: boolean;
  }

  const draft: Article = { title: 'Required' };

  draft.subtitle = 'Propriedades obrigatórias';
  draft.description = 'Descrição';
  draft.createdAt = new Date('2025/02/26');
  draft.public = false;

  //tyoe assertion
  //publishArticle(draft as Required<Article>);

  function publishArticle(article: Required<Article>): void {
    console.log('Publicando o artigo: ', article);
  }

  const completedArticle: Required<Article> = {
    title: draft.title ?? '',
    subtitle: draft.subtitle ?? '',
    description: draft.description ?? '',
    createdAt: draft.createdAt ?? new Date(),
    public: draft.public ?? false,
  };

  publishArticle(completedArticle);
  // Article = Article
  // Article != Required<Article>
  //   -title: String | undefined == title: String */
};
