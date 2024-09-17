import { Component } from '@angular/core';
import { GestionRisqueComponent } from '../gestion-risque/gestion-risque.component';
import { PaixComponent } from '../paix/paix.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-climate',
  standalone: true,
  imports: [
    RouterLink,
    GestionRisqueComponent,
    PaixComponent,
    ChangeClimateComponent
  ],
  templateUrl: './change-climate.component.html',
  styleUrl: './change-climate.component.css'
})
export class ChangeClimateComponent {

}
