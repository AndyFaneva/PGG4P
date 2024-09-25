import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-actualite',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent {

}
