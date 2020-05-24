import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { DestinationsComponent } from './destinations/destinations.component';
import { TypologiesComponent } from './typologies/typologies.component';
import {MatMenuModule} from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './ajax.service';
import { PlacesComponent } from './places/places.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DestinationsComponent,
    TypologiesComponent,
    PlacesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [
    AjaxService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
