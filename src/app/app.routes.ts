import { Routes } from '@angular/router';
import { ThematiqueComponent } from './thematique/thematique.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { CommencerComponent } from './commencer/commencer.component';
import { RessourceComponent } from './ressource/ressource.component';
import { HomeComponent } from './home/home.component';
import { PaixComponent } from './thematique/paix/paix.component';
import { GestionRisqueComponent } from './thematique/gestion-risque/gestion-risque.component';
import { ChangeClimateComponent } from './thematique/change-climate/change-climate.component';
import { SingingComponent } from './singing/singing.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path :'thematique', component:ThematiqueComponent},
    {path :'home', component:HomeComponent},
    {path :'', redirectTo:'home',pathMatch:'full'},
    {path :'actualite', component:ActualiteComponent},
    {path :'commencer', component:CommencerComponent},
    {path :'ressource', component:RessourceComponent},
    {path:'paix', component:PaixComponent},
    {path:'gestion-risque',component:GestionRisqueComponent},
    {path:'change-climate',component:ChangeClimateComponent},
    {path:'login',component:LoginComponent},
    {path:'singing',component:SingingComponent}
];
