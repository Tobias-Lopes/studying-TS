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

  interface ArticlePreview
    extends Omit<ArticleType, 'subtitle' | 'description'> {}

  type ArticlePreviewType = Omit<ArticleType, 'subtitle' | 'description'>;

  const articlePreview: ArticlePreviewType = {
    title: 'Dominando o TS',
    createdAt: new Date('2025-02-26'),
    public: true,
  };

  console.log(articlePreview);
};
