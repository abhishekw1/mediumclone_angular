import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';

export interface SettingStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
