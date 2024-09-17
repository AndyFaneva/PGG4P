import { Component } from '@angular/core';
import { ChangeClimateComponent } from '../change-climate/change-climate.component';
import { GestionRisqueComponent } from '../gestion-risque/gestion-risque.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paix',
  standalone: true,
  imports: [
    RouterLink, 
    ChangeClimateComponent,
    GestionRisqueComponent,
    PaixComponent
  ],
  templateUrl: './paix.component.html',
  styleUrl: './paix.component.css'
})
export class PaixComponent {

}
