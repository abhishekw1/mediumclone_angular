import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectCurrentUser } from '../../auth/store/reducer';
import { combineLatest, filter, Subscription } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { selectIsSubmitting, selectValidationErrors } from '../store/reducer';
import { BackendErrorMessagesComponent } from '../../shared/components/backend-error-messages/backend-error-messages.component';
import { CommonModule } from '@angular/common';
import { authActions } from '../../auth/store/action';
import { CurrentUserRequestInterface } from '../../shared/types/currentUserRequest.interface';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BackendErrorMessagesComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.fb.nonNullable.group({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  currentUser?: CurrentUserInterface;

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    bakendErrors: this.store.select(selectValidationErrors),
  });

  currentUserSubscription?: Subscription;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.store
      .pipe(select(selectCurrentUser), filter(Boolean))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }
  initializeForm() {
    if (!this.initializeForm) {
      throw new Error('current user is not set');
    }
    this.form.patchValue({
      image: this.currentUser?.image ?? '',
      username: this.currentUser?.username,
      bio: this.currentUser?.bio ?? '',
      email: this.currentUser?.email,
      password: '',
    });
  }

  onSubmit() {
    if (!this.currentUser) {
      throw new Error('current user is not set');
    }
    const currentUserRequest: CurrentUserRequestInterface = {
      user: {
        ...this.currentUser,
        ...this.form.getRawValue(),
      },
    };
    this.store.dispatch(authActions.updateCureentUser({ currentUserRequest }));
  }

  Logout() {
    this.store.dispatch(authActions.logout());
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }
}
