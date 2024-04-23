import { createFeature, createReducer, on } from '@ngrx/store';
import { ArticleStateInterface } from '../types/artilceState.interface';
import { articleActions } from './action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: ArticleStateInterface = {
  isLoading: false,
  article: undefined,
  error: null,
};
const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({ ...state, isLoading: true })),
    on(articleActions.getArticleSuccess, (state, action) => ({
      ...state,
      article: action.article,
      isLoading: false,
    })),
    on(articleActions.getArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectArticle,
  selectError,
} = articleFeature;
