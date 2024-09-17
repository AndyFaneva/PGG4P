import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaixComponent } from './paix/paix.component';
import { ChangeClimateComponent } from './change-climate/change-climate.component';
import { GestionRisqueComponent } from './gestion-risque/gestion-risque.component';


@Component({
  selector: 'app-thematique',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    PaixComponent,
    ChangeClimateComponent,
    GestionRisqueComponent,
    ThematiqueComponent
  ],
  templateUrl: './thematique.component.html',
  styleUrl: './thematique.component.css'
})
export class ThematiqueComponent {

}
