import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserProfileInterface } from '../types/userProfile.interface';
import { environment } from '../../../environments/environment';
import { GetUserProfileInterface } from '../types/getUserProfileResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http
      .get<GetUserProfileInterface>(url)
      .pipe(map((response) => response.profile));
  }

  followUser(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http
      .post<GetUserProfileInterface>(url, {})
      .pipe(map((response) => response.profile));
  }

  unfollowUser(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;

    return this.http
      .delete<GetUserProfileInterface>(url)
      .pipe(map((response) => response.profile));
  }
}
