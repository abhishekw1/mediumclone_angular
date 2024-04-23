import { Component, Input } from '@angular/core';
import { TitleCasePipeFirstWord } from '../../pipes/titlecasefirstword.pipe';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: ` <div>Loading...</div>`,
  imports: [TitleCasePipeFirstWord],
})
export class LoadingComponent {}
