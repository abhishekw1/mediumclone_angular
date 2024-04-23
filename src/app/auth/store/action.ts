import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserRequestInterface } from '../../shared/types/currentUserRequest.interface';

// old way
// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login success': props<{ currentUser: CurrentUserInterface }>(),
    'Login failure': props<{ errors: BackendErrorsInterface }>(),

    'Get cureent user': emptyProps(),
    'Get cureent user success': props<{ currentUser: CurrentUserInterface }>(),
    'Get cureent user failure': emptyProps(),

    'Update cureent user': props<{
      currentUserRequest: CurrentUserRequestInterface;
    }>(),
    'Update cureent user success': props<{
      currentUser: CurrentUserInterface;
    }>(),
    'Update cureent user failure': props<{ errors: BackendErrorsInterface }>(),

    Logout: emptyProps(),
  },
});
