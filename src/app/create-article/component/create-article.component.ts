import { ArticleFormValuesInterface } from './../../shared/components/article-form/types/articleFormValues.interface';
import { Component } from '@angular/core';
import { ArticleFormComponent } from '../../shared/components/article-form/article-form.component';
import { Store } from '@ngrx/store';
import { ArticleRequestInterface } from '../../shared/types/articelRequest.interface';
import { createArticleActions } from '../store/action';
import { combineLatest } from 'rxjs';
import { selectIsSubmitted, selectValidationErrors } from '../store/reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss',
})
export class CreateArticleComponent {
  initialVlaues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  data$ = combineLatest({
    isSubmitted: this.store.select(selectIsSubmitted),
    backendErrors: this.store.select(selectValidationErrors),
  });
  constructor(private store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(createArticleActions.createArticles({ request }));
  }
}
