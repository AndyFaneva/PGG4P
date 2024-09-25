import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-thematique',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ThematiqueComponent
  ],
  templateUrl: './thematique.component.html',
  styleUrl: './thematique.component.css'
})
export class ThematiqueComponent {

}
