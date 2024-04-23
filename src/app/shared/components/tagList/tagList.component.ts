import { Component, Input } from '@angular/core';
import { PopularTagType } from '../../types/popularTagType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  template: `
    <ul class="list mt-2 ps-0 d-flex flex-wrap gap-1">
      @for (tag of tags; track $index) { @if(tag){
      <li class="list-inline-item">
        <a
          class="btn btn-outline-secondary btn-sm"
          [routerLink]="['/tags', tag]"
          >{{ tag }}</a
        >
      </li>
      } }
    </ul>
  `,
  styles: [
    `
      .btn:hover {
        background: #8e3d8f;
        color: #ffff;
      }
    `,
  ],
  imports: [RouterLink],
  standalone: true,
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}
