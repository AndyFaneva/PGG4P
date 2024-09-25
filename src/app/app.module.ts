import {ReactiveFormsModule} from '@angular/forms';
import bootstrap from '../main.server';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[
      AppComponent,
      LoginComponent
    ],
    imports:[
      BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap:[AppComponent]
})
export class AppModule {}