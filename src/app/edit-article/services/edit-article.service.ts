import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleRequestInterface } from '../../shared/types/articelRequest.interface';
import { map, Observable } from 'rxjs';
import { ArticleInterface } from '../../shared/types/article.interface';
import { environment } from '../../../environments/environment';
import { ArticleResponseInterface } from '../../shared/types/articleResonse.interface';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    slug: string,
    articelRequest: ArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + `/articles/${slug}`;
    return this.http
      .put<ArticleResponseInterface>(fullUrl, articelRequest)
      .pipe(map((response) => response.article));
  }
}
