import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-ressource',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent {

}
