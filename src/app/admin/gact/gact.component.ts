import { Component } from '@angular/core';
import { Header1Component } from '../../header1/header1.component';

@Component({
  selector: 'app-gact',
  standalone: true,
  imports: [
    Header1Component
  ],
  templateUrl: './gact.component.html',
  styleUrl: './gact.component.css'
})
export class GactComponent {

}
