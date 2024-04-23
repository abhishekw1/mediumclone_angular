import { ArticleInterface } from './../../shared/types/article.interface';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateArticleService } from '../services/create-article.service';
import { createArticleActions } from './action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createArticleService = inject(CreateArticleService)
  ) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticles),
      switchMap(({ request }) => {
        return createArticleService.createArticle(request).pipe(
          map((article: ArticleInterface) => {
            return createArticleActions.createArticlesSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleActions.createArticlesFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticlesSuccess),
      tap(({ article }) => {
        router.navigate(['/article', article.slug]);
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
