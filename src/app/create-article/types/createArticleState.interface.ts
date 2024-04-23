import { BackendErrorsInterface } from '../../shared/types/bakendError.interface';

export interface CreateArticleStateInterface {
  isSubmitted: boolean;
  validationErrors: BackendErrorsInterface | null;
}
