import { Routes } from '@angular/router';
import { EditArticleComponent } from './component/edit-article.component';
import { EditArticleService } from './services/edit-article.service';
import { provideEffects } from '@ngrx/effects';
import * as editArticleEffects from './store/effects';
import { provideState } from '@ngrx/store';
import { editArticleFeatreKey, editArticleReducer } from './store/reducer';

export const editArticleRoutes: Routes = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideEffects(editArticleEffects),
      provideState(editArticleFeatreKey, editArticleReducer),
    ],
  },
];
