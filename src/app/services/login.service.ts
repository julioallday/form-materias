import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  setStorage(chave: string, valor: string) {
    localStorage.setItem(chave, valor);
    const textObj = JSON.stringify(localStorage.getItem(chave))
    const obj = JSON.parse(textObj)
    console.log(obj);
  }
}
