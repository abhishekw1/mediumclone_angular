import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userProfileActions } from '../../store/actions';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-follow',
  template: `
    <button
      type="button"
      class="btn btn-outline-secondary action-btn"
      data-bs-toggle="button"
      aria-pressed="false"
      autocomplete="off"
      (click)="follow()"
    >
      {{ !following ? 'Follow' : 'Unfollow' }}
    </button>
  `,
  standalone: true,
})
export class FollowBtn {
  @Input() slug: string = '';
  @Input() following: boolean = false;
  store = inject(Store);
  servie = inject(UserProfileService);

  follow() {
    this.following = !this.following;
    this.store.dispatch(
      userProfileActions.followUserProfile({
        slug: this.slug,
        follow: this.following,
      })
    );
  }
}
