import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectPopularTags,
} from './store/reducer';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { TagListComponent } from '../tagList/tagList.component';
import { popularTagsActions } from './store/actions';

@Component({
  selector: 'app-popular-tags',
  template: `
    @if (data$ | async; as data) {
    <div class="bg-body-tertiary p-2 rounded">
      @if(data.isLoading){
      <div>Loading tags...</div>
      } @if(data.error){
      <app-error-message [errorMsg]="data.error"></app-error-message>
      } @if(data.poularTags){

      <h2>Popular Tags</h2>
      <app-tag-list [tags]="data.poularTags"></app-tag-list>
      }
    </div>
    }
  `,
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent, TagListComponent],
})
export class PopularTagListComponent implements OnInit {
  data$ = combineLatest({
    poularTags: this.store.select(selectPopularTags),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
  });
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
