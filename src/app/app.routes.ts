import { Routes } from '@angular/router';
import { ThematiqueComponent } from './auth/thematique/thematique.component';
import { ActualiteComponent } from './auth/actualite/actualite.component';
import { HomeComponent } from './auth/home/home.component';
import { RessourceComponent } from './auth/ressource/ressource.component';
import { SingingComponent } from './auth/singing/singing.component';
import { LoginComponent } from './auth/login/login.component';
export const routes: Routes = [
    {path :'thematique', component:ThematiqueComponent},
    {path :'home', component:HomeComponent},
    {path :'', redirectTo:'home',pathMatch:'full'},
    {path :'actualite', component:ActualiteComponent},
    {path :'ressource', component:RessourceComponent},
    {path:'login',component:LoginComponent},
    {path:'singing',component:SingingComponent}
];
