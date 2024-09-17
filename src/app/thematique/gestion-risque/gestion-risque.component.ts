import { Component } from '@angular/core';
import { ChangeClimateComponent } from '../change-climate/change-climate.component';
import { PaixComponent } from '../paix/paix.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-risque',
  standalone: true,
  imports: [
    RouterLink,
    GestionRisqueComponent,
    ChangeClimateComponent,
    PaixComponent
  ],
  templateUrl: './gestion-risque.component.html',
  styleUrl: './gestion-risque.component.css'
})
export class GestionRisqueComponent {

}
