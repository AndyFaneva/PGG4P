import { Component } from '@angular/core';
import { Header1Component } from '../../header1/header1.component';

@Component({
  selector: 'app-guser',
  standalone: true,
  imports: [
    Header1Component
  ],
  templateUrl: './guser.component.html',
  styleUrl: './guser.component.css'
})
export class GuserComponent {

}
