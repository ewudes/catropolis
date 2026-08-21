import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FormComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not submit and should mark all fields as touched when the form is invalid', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const component = fixture.componentInstance;

    component.onSubmit();

    expect(component['submitted']()).toBeFalse();
    expect(component['form'].controls.name.touched).toBeTrue();
    expect(component['form'].controls.email.touched).toBeTrue();
  });

  it('should submit and reset the form when all required fields are valid', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const component = fixture.componentInstance;
    const form = component['form'];

    form.setValue({
      name: 'Барсик',
      weight: '7',
      age: '3',
      program: 'gain',
      email: 'owner@example.com',
      phone: '8 (960) 900-60-90',
      comment: '',
      sweetener: true,
      drinking: false,
      milk: false,
      vitamins: false
    });

    component.onSubmit();

    expect(component['submitted']()).toBeTrue();
    expect(form.value.name).toBe('');
    expect(form.value.program).toBe('loss');
  });

  it('should reject a phone number that does not match the required format', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const component = fixture.componentInstance;
    const phone = component['form'].controls.phone;

    phone.setValue('960-900-60-90');

    expect(phone.invalid).toBeTrue();
  });
});
