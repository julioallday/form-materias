import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormMateriasComponent } from './components/form-materias/form-materias.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMateriasComponent,
    ModalComponent,
    CardComponent,
    InputFormComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
