import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldDef } from 'src/app/models/interfaces/form-field-def';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnChanges {
  @Input() fields: FormFieldDef[] = [];
  @Input() formData: any = {};

  @Output() submitForm = new EventEmitter<any>();
  @Output() deleteForm = new EventEmitter<number>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fields'] || changes['formData']) {
      this.buildForm();
    }
  }

  buildForm() {
    const group: any = {};
    for (const field of this.fields) {
      const value = this.formData?.[field.name] ?? null;
      group[field.name] = field.required ? [value, Validators.required] : [value];
    }
    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value, );
    } else {
      this.form.markAllAsTouched();
    }
  }

  onDelete() {
    const id = this.form.get('id')?.value;
    if (id) {
      this.deleteForm.emit(id);
    }
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
}