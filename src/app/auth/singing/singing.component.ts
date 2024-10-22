import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-singing',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './singing.component.html',
  styleUrl: './singing.component.css'
})
export class SingingComponent {

}
