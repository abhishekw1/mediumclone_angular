import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from './store/action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.compoennt.html',
  imports: [CommonModule],
  standalone: true,
})
export class AddToFavoritesCmponent {
  @Input() favoritesCount = 0;
  @Input() articleSlug = '';
  @Input() isFavorites = false;

  constructor(private store: Store) {}
  handleLike() {
    if (this.isFavorites) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorites = !this.isFavorites;
    this.store.dispatch(
      addToFavoritesActions.addToFavorites({
        isFavrited: this.isFavorites,
        slug: this.articleSlug,
      })
    );
  }
}
