import { Routes } from '@angular/router';
import { UserProfileComponent } from './component/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { provideState } from '@ngrx/store';
import { userProfileFeatureKey, userProfileReducer } from './store/reducer';
import { provideEffects } from '@ngrx/effects';
import * as getUserProfileEffects from './store/effects';
export const userProfilesRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    providers: [
      UserProfileService,
      provideState(userProfileFeatureKey, userProfileReducer),
      provideEffects(getUserProfileEffects),
    ],
  },
];
