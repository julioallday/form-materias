import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private loginService: LoginService) {}
  setConta(event: any) {
    const conta = {
      email: event.target.parentNode[0].value,
      senha: event.target.parentNode[1].value,
    };
    this.loginService.setStorage('login', JSON.stringify(conta));
   
    
  }
}
