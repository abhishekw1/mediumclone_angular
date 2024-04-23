import { ArticleInterface } from './../../shared/types/article.interface';
import { ArticleFormValuesInterface } from '../../shared/components/article-form/types/articleFormValues.interface';
import { Component, OnInit } from '@angular/core';
import { ArticleFormComponent } from '../../shared/components/article-form/article-form.component';
import { select, Store } from '@ngrx/store';
import { ArticleRequestInterface } from '../../shared/types/articelRequest.interface';
import { editArticleActions } from '../store/action';
import { combineLatest, filter, map, Observable } from 'rxjs';
import {
  selectIsSubmitted,
  selectValidationErrors,
  selectIsLoading,
  selectArticle,
} from '../store/reducer';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../shared/components/loding/loading.component';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule, LoadingComponent],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss',
})
export class EditArticleComponent implements OnInit {
  // initialVlaues = {
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: [],
  // };
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  initialVlaues$: Observable<ArticleFormValuesInterface> = this.store.pipe(
    select(selectArticle),
    filter((article): article is ArticleInterface => article != null),
    map((article: ArticleInterface) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      };
    })
  );
  data$ = combineLatest({
    isSubmitted: this.store.select(selectIsSubmitted),
    backendErrors: this.store.select(selectValidationErrors),
    isLoading: this.store.select(selectIsLoading),
    initialVlaues: this.initialVlaues$,
  });
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({ slug: this.slug }));
  }
  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(
      editArticleActions.updateArticle({ request, slug: this.slug })
    );
  }
}
