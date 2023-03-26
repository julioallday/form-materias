import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormMateriasComponent } from './components/form-materias/form-materias.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMateriasComponent,
    ModalComponent,
    CardComponent,
    InputFormComponent,
    NavbarComponent,
    HomeComponent,
    PesquisarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
