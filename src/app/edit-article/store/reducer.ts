import { createFeature, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/editArticleState.interface';
import { editArticleActions } from './action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitted: false,
  validationErrors: null,
};

const editArticleFeature = createFeature({
  name: 'editArticle',
  reducer: createReducer(
    initialState,
    on(editArticleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(editArticleActions.getArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      article: action.article,
    })),
    on(editArticleActions.getArticleFailure, (state, action) => ({
      ...state,
      isSubmitted: false,
    })),
    on(editArticleActions.updateArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(editArticleActions.updateArticleSuccess, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(editArticleActions.updateArticleFailure, (state, action) => ({
      ...state,
      isSubmitted: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: editArticleFeatreKey,
  reducer: editArticleReducer,
  selectIsSubmitted,
  selectValidationErrors,
  selectIsLoading,
  selectArticle,
} = editArticleFeature;
