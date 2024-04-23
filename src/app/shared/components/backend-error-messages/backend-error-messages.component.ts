import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BackendErrorsInterface } from '../../types/bakendError.interface';
import { TitleCasePipeFirstWord } from '../../pipes/titlecasefirstword.pipe';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [TitleCasePipeFirstWord],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent implements OnInit, OnChanges {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ');
      return `${name} ${message}!`;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const isErrorChanged =
      !changes['backendErrors'].firstChange &&
      changes['backendErrors'].currentValue !==
        changes['backendErrors'].previousValue;
    console.log(isErrorChanged);

    if (isErrorChanged) {
      this.errorMessages = Object.keys(this.backendErrors).map(
        (name: string) => {
          const message = this.backendErrors[name].join(' ');
          return `${name} ${message}!`;
        }
      );
    }
  }
}
