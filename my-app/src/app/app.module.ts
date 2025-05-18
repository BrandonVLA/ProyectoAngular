import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoFormularioComponent } from './producto-formulario.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ReactiveFormsModule, ProductoFormularioComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
