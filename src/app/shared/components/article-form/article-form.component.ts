import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleFormValuesInterface } from './types/articleFormValues.interface';
import { BackendErrorsInterface } from '../../types/bakendError.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesComponent } from '../backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  standalone: true,
  imports: [BackendErrorMessagesComponent, ReactiveFormsModule],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValue?: ArticleFormValuesInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = {};

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (!this.initialValue) {
      throw new Error('Inputs are not provided');
    }
    this.form.patchValue({
      title: this.initialValue.title,
      description: this.initialValue.description,
      body: this.initialValue.body,
      tagList: this.initialValue.tagList.join(' '),
    });
  }

  onSubmit() {
    const formValues = this.form.getRawValue();
    const articleFormValues: ArticleFormValuesInterface = {
      ...formValues,
      tagList: formValues.tagList.split(' '),
    };
    this.articleSubmit.emit(articleFormValues);
  }
}
