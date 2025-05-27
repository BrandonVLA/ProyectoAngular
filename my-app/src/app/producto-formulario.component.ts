import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-formulario',
  templateUrl: './producto-formulario.component.html',
  styleUrls: ['./producto-formulario.component.css'], //Con ayuda de copilot tuve que modificar styleUrr por styleUrls para evitar error de ejecucion relacionado con StandAlone
  standalone: true, // StandAlone fue agregado para evitar error de ejecucion por Copilot
  imports: [ReactiveFormsModule],
})
export class ProductoFormularioComponent {
  productoFormulario: FormGroup;
  categorias = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronic Devices' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Shoes' },
    { id: 5, name: 'Others' },
  ];

  constructor(private fb: FormBuilder) {
    this.productoFormulario = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      price: [
        '',
        [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d{1,2})?$/)],
      ],
      description: ['', [Validators.required, Validators.pattern(/^.+$/)]],
      categoryId: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    });
  }

  /* Realizado con ayuda de Copilot */
  onSubmit() {
    if (this.productoFormulario.valid) {
      const formValue = this.productoFormulario.value;
      const categoriaSeleccionada = this.categorias.find(
        (cat) => cat.id === Number(formValue.categoryId)
      );
      const dataProducto = {
        title: formValue.title.trim(),
        price: Number(formValue.price),
        description: formValue.description.trim(),
        categoryId: Number(formValue.categoryId),
        images: ['https://example.com'],
      };
      console.log(JSON.stringify(dataProducto));
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
      - Categoría: ${
        categoriaSeleccionada
          ? categoriaSeleccionada.name
          : data.category?.name || data.category?.id
      }
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
