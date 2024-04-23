import { Routes } from '@angular/router';
import { ArticleComponent } from './component/article.component';
import * as articleEffect from './store/effect';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { articleFeatureKey, articleReducer } from './store/reducer';
import { ArticleService } from './service/article.service';

export const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideState(articleFeatureKey, articleReducer),
      provideEffects(articleEffect),
      ArticleService,
    ],
  },
];
