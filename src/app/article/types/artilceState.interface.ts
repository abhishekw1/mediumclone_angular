import { ArticleInterface } from '../../shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null | undefined;
  error: string | null;
}
