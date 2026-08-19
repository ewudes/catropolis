import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationComponent } from '../../layout/location/location.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, LocationComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  private readonly fb = new FormBuilder();

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    weight: ['', Validators.required],
    age: ['', Validators.required],
    program: ['loss', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/)]],
    comment: [''],
    sweetener: [true],
    drinking: [false],
    milk: [false],
    vitamins: [false]
  });

  protected readonly submitted = signal(false);

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: подключить реальный эндпоинт после появления бэкенда магазина.
    console.log('Заявка на подбор программы:', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset({ program: 'loss', sweetener: true, drinking: false, milk: false, vitamins: false });
  }
}
