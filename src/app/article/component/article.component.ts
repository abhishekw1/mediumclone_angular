import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectArticle, selectError, selectIsLoading } from '../store/reducer';
import { articleActions } from '../store/action';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { combineLatest, filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectCurrentUser } from '../../auth/store/reducer';
import { TagListComponent } from '../../shared/components/tagList/tagList.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../shared/components/loding/loading.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TagListComponent,
    ErrorMessageComponent,
    LoadingComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  isAuther$ = combineLatest({
    article: this.store.select(selectArticle),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) {
        return false;
      }
      return article.author.username === currentUser.username;
    })
  );
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    article: this.store.select(selectArticle),
    error: this.store.select(selectError),
    isAuther: this.isAuther$,
  });
  slug: string = '';
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.store.dispatch(articleActions.getArticle({ slug: this.slug }));
    });
  }

  deleteArticle(): void {
    this.store.dispatch(articleActions.deleteArticle({ slug: this.slug }));
  }
}
