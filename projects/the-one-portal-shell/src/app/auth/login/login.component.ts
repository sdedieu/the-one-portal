import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'lib-login',
  template: `
    <form class="card" [formGroup]="loginForm" (ngSubmit)="validate()">
      <mat-form-field appearance="outline">
        <mat-label>Login</mat-label>
        <input matInput placeholder="Login" formControlName="login">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input type="password" matInput placeholder="Password" formControlName="password">
      </mat-form-field>

      <button [disabled]="loginForm.invalid" color="primary" type="submit" mat-raised-button>Login</button>
    </form>
  `,
  styles: [`
    form.card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  validate() {
    this._authService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      error: (error) => this._snackBar.open((error as Error).message, 'ok', {
        duration: 5000,
      })
    })
  }
}