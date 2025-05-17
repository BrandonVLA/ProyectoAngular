import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ProductoFormularioComponent {
  productoFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoFormulario = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      price: ['', [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d{1,2})?$/)],],
      description: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      categoryId: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    });
  }
}
