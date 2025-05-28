# ProyectoAngular


## Formulario de Creación de Producto con Angular 19

#### Formulario para ingreso de Productos a Inventario por medio de Angular 19 con utilizacion de FormBuilder, Validators.pattern, API y fetch ####

### Prompts de Copilot Utilizados:

* 1- Revisa la sintaxis y verifica por que <app-producto-formulario></app-producto-formulario> lo esta tomando como un tag inexistente

* 2- Agrega un dropdown para seleccionar el Category ID y que despliegue las categorias de articulos y agrega categorias de ejemplo

* 3-Dale un estilo empresarial a mi formulario y crea un nuevo archivo para almacenar los estilos de producto-formulario.component.html. Despues vincula los estilos de producto-formulario.component.css a producto-formulario.component.html

* Haz que cuando envie la informacion al API,se tomen en cuenta las categorias que tengo en el dropdown,en lugar de generar una aleatoria o tomar la de la API y se muestre toda la informacion en el alert de manera correcta 

🔒 **Validaciones**:
* Todos los campos son Obligatorios
* Validacion de formato mediante expresiones regulares y la propiedad 'pattern'
* Se muestran advertencias e instrucciones en caso de campos invalidos
* Seleccion de Categoria utilizando un tag de html 'select'

💡 **Tecnologías utilizadas**:

* Angular 19 Reactive Forms
* Validaciones con 'FormBuilder' y Validators.pattern
* Fetch a API para peticiones de tipo HTTP
