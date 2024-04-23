import { Component, Input } from '@angular/core';
import { TitleCasePipeFirstWord } from '../../pipes/titlecasefirstword.pipe';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: ` <div class="alert alert-danger" role="alert">
    {{ errorMsg | titlecasefirstword }}
  </div>`,
  imports: [TitleCasePipeFirstWord],
})
export class ErrorMessageComponent {
  @Input() errorMsg: string = 'Something went wrong';
}
