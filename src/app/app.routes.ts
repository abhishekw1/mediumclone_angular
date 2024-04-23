import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'global-feed', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'global-feed',
    loadChildren: () =>
      import('./globalfeed/globalFeed.routes').then((m) => m.globalFeedRoutes),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./yourfeed/yourFeed.routes').then((m) => m.yourFeedRoutes),
  },
  {
    path: 'tags/:slug',
    loadChildren: () =>
      import('./tagfeed/tagFeed.routes').then((m) => m.tagFeedRoutes),
  },
  {
    path: 'article/new',
    loadChildren: () =>
      import('./create-article/create-article.routes').then(
        (m) => m.createArticleRoutes
      ),
  },
  {
    path: 'article/:slug',
    loadChildren: () =>
      import('./article/article.routes').then((m) => m.articleRoutes),
  },
  {
    path: 'article/:slug/edit',
    loadChildren: () =>
      import('./edit-article/edit-article.routes').then(
        (m) => m.editArticleRoutes
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.routes').then((m) => m.settingsRoutes),
  },
  {
    path: 'profiles/:slug',
    loadChildren: () =>
      import('./user-profile/user-profile.routes').then(
        (m) => m.userProfilesRoutes
      ),
  },
  {
    path: 'profiles/:slug/favorites',
    loadChildren: () =>
      import('./user-profile/user-profile.routes').then(
        (m) => m.userProfilesRoutes
      ),
  },
];
