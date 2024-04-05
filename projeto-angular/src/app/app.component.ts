import { MeuComponenteComponent } from './components/meu-componente/meu-componente.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MeuComponenteComponent]
})
export class AppComponent {
  mensagem: string = "Olá mundo!"
}
