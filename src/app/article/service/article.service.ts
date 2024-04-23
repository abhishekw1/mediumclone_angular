import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticles(slug: string): Observable<{}> {
    const fullUrl = environment.apiUrl + `/articles/${slug}`;
    return this.http.delete(fullUrl);
  }
}
