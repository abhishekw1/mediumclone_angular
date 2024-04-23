import { Routes } from '@angular/router';
import { SettingsComponent } from './component/settings.component';
import { provideState } from '@ngrx/store';
import { settingsFeatureKey, settingsReducer } from './store/reducer';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    providers: [provideState(settingsFeatureKey, settingsReducer)],
  },
];
