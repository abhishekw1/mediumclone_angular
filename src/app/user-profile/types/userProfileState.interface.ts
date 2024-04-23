import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';
import { UserProfileInterface } from './userProfile.interface';

export interface UserProfileState {
  data: UserProfileInterface | null;
  isLoading: boolean;
  error: BackendErrorsInterface | null;
}
