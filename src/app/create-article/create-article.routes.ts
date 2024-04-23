import { createArticleEffect } from './store/effects';
import { Routes } from '@angular/router';
import { CreateArticleComponent } from './component/create-article.component';
import { CreateArticleService } from './services/create-article.service';
import { provideEffects } from '@ngrx/effects';
import * as createArticleEffects from './store/effects';
import { provideState } from '@ngrx/store';
import { createArticleFeatreKey, createArticleReducer } from './store/reducer';

export const createArticleRoutes: Routes = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideEffects(createArticleEffects),
      provideState(createArticleFeatreKey, createArticleReducer),
    ],
  },
];
