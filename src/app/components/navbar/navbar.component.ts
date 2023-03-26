import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  personagem: any = {
    nome: 'Naruto Uzumaki',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCX4FSosRMfNR6ZchicicYb0Z77XPNFC12g&usqp=CAU',

    descricao: `Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) é um shinobi de Konohagakure do clã Uzumaki e protagonista homônimo da franquia Naruto. Desde seu nascimento, ele se tornou jinchūriki das Nove-Caudas, um destino que o levou a ser condenado e negligenciado por toda a aldeia durante sua infância. Depois de entrar para o Time 7, ao lado de Sakura Haruno, Sasuke Uchiha e sob comando de Kakashi Hatake, Naruto trabalhou duro para ganhar o respeito e o reconhecimento da aldeia, com o sonho de se tornar Hokage. `,
  };
  constructor() {
    
  }
}
