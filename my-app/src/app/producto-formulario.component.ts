import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-producto-formulario',
  templateUrl: './producto-formulario.component.html',
  styleUrls: ['./producto-formulario.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ProductoFormularioComponent {
  productoFormulario: FormGroup;
  categorias = [
    { id: 1, name: 'Ropa' },
    { id: 2, name: 'Electrónica' },
    { id: 3, name: 'Muebles' },
    { id: 4, name: 'Zapatos' },
    { id: 5, name: 'Otros' }
  ];

  constructor(private fb: FormBuilder) {
    this.productoFormulario = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      price: ['', [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d{1,2})?$/)]],
      description: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      categoryId: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    });
  }

  onSubmit() {
    if (this.productoFormulario.valid) {
      const formValue = this.productoFormulario.value;
      const categoriaSeleccionada = this.categorias.find(
        cat => cat.id === Number(formValue.categoryId)
      );
      const dataProducto = {
        title: formValue.title,
        price: Number(formValue.price),
        description: formValue.description,
        categoryId: Number(formValue.categoryId),
        images: ['https://example.com'],
      };

      fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataProducto),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`Producto creado exitosamente!
- Título: ${data.title}
- Precio: ${data.price}
- Descripción: ${data.description}
- Categoría: ${categoriaSeleccionada ? categoriaSeleccionada.name : data.category?.name || data.category?.id}
- ID: ${data.id}
- Imágenes: ${data.images?.join(', ')}
          `);
          this.productoFormulario.reset();
        })
        .catch((error) => alert('Error:' + error.message));
    } else {
      alert('Por favor rellene los campos necesarios.');
    }
  }
}
