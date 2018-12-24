import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule,
  MatSnackBarModule,
  MatCardModule
} from "@angular/material";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NotesService } from './services/notes.service'

const firebaseconfig: any = {
  apiKey: '<AIzaSyAM7c43JPYkvehRB4CT5Z24AQ2vvUKVqJE',
  authDomain: 'platzinotas-991ab.firebaseapp.com',
  databaseURL: 'https://platzinotas-991ab.firebaseio.com',
  projectId: 'platzinotas-991ab',
  storageBucket: 'platzinotas-991ab.appspot.com',
  messagingSenderId: '782382976879'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
