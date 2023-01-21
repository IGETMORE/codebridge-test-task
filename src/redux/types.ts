export interface Article {
  id?: number;
  title?: string;
  imageUrl?: string;
  summary: string;
  publishedAt?: string;
}

export interface ArticlesSliseState {
  articles: Article[];
  filter: string;
  isLoading: boolean;
}
