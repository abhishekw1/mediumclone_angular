import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PopularTagType } from '../../../types/popularTagType';
import { environment } from '../../../../../environments/environment';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPoularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<GetPopularTagsResponseInterface>(url)
      .pipe(map((resposne) => resposne.tags));
  }
}
