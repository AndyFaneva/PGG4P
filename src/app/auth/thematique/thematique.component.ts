import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-thematique',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
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
