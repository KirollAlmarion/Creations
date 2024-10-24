import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlocComponent } from './bloc/bloc.component';
import { CompetenceComponent } from './competence/competence.component';
import { AccomplissementComponent } from './accomplissement/accomplissement.component';
import { FicheComponent } from './fiche/fiche.component';
import { AnnexeComponent } from './annexe/annexe.component';
import { PigmentComponent } from './pigment/pigment.component';
import { TelechargementComponent } from './telechargement/telechargement.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocComponent,
    CompetenceComponent,
    AccomplissementComponent,
    FicheComponent,
    AnnexeComponent,
    PigmentComponent,
    TelechargementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
