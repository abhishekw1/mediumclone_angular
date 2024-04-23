import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateIterface } from '../types/auth.interface';
import { authActions } from './action';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: AuthStateIterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      validationErrors: null,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: action.currentUser,
      validationErrors: null,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      validationErrors: action.errors,
    })),
    on(authActions.getCureentUser, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.getCureentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCureentUserFailure, (state) => ({
      ...state,
      isLoading: false,
      currentUser: null,
    })),
    on(authActions.updateCureentUserSuccess, (state, action) => ({
      ...state,
      currentUser: action.currentUser,
    })),
    on(routerNavigationAction, (state) => ({
      ...state,
      validationErrors: null,
    })),
    on(authActions.logout, (state) => ({
      ...state,
      ...initialState,
      currentUser: null,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectCurrentUser,
} = authFeature;
