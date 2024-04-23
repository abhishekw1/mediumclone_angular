import { createFeature, createReducer, on } from '@ngrx/store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';
import { createArticleActions } from './action';

const initialState: CreateArticleStateInterface = {
  isSubmitted: false,
  validationErrors: null,
};

const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(createArticleActions.createArticles, (state) => ({
      ...state,
      isSubmitted: true,
    })),
    on(createArticleActions.createArticlesSuccess, (state) => ({
      ...state,
      isSubmitted: false,
    })),
    on(createArticleActions.createArticlesFailure, (state, action) => ({
      ...state,
      validationErrors: action.errors,
      isSubmitted: false,
    }))
  ),
});

export const {
  name: createArticleFeatreKey,
  reducer: createArticleReducer,
  selectIsSubmitted,
  selectValidationErrors,
} = createArticleFeature;
