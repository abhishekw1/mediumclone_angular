import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export interface AuthStateIterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
