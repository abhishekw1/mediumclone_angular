import { ArticleInterface } from '../../shared/types/article.interface';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article success': props<{ article: ArticleInterface }>(),
    'Get article failure': emptyProps(),

    'Delete article': props<{ slug: string }>(),
    'Delete article success': emptyProps(),
    'Delete article failure': emptyProps(),
  },
});
