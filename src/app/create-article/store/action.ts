import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleRequestInterface } from '../../shared/types/articelRequest.interface';
import { ArticleInterface } from '../../shared/types/article.interface';
import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';

export const createArticleActions = createActionGroup({
  source: 'createArticles',
  events: {
    'Create articles': props<{ request: ArticleRequestInterface }>(),
    'Create articles success': props<{ article: ArticleInterface }>(),
    'Create articles failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
