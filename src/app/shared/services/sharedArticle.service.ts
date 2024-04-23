import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleResponseInterface } from '../types/articleResonse.interface';
import { environment } from '../../../environments/environment';
import { ArticleInterface } from '../types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedArticleService {
  constructor(private http: HttpClient) {}

  getArticles(slug: string): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + `/articles/${slug}`;
    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article));
  }
}
