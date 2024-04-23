import { Component } from '@angular/core';
import { FeedComponent } from '../../shared/components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { PopularTagListComponent } from '../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../../shared/components/feed-toggler/feed-toggler.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.comonent.html',
  standalone: true,
  imports: [
    FeedComponent,
    CommonModule,
    BannerComponent,
    PopularTagListComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
