import { createFeature, createReducer, on } from '@ngrx/store';
import { SettingStateInterface } from '../types/settingsState.interface';
import { authActions } from '../../auth/store/action';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCureentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCureentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.updateCureentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = settingsFeature;
