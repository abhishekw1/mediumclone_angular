import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProfileService } from '../services/user-profile.service';
import { userProfileActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserProfileInterface } from '../types/userProfile.interface';

export const getUserProfileEffects = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService)
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.getUserProfile),
      switchMap(({ slug }) => {
        return userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.getUserProfileFailure());
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
export const followUserProfileEffects = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService)
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.followUserProfile),
      switchMap(({ slug, follow }) => {
        const follow$ = follow
          ? userProfileService.followUser(slug)
          : userProfileService.unfollowUser(slug);
        return follow$.pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.followUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.followUserProfileFailure());
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
