import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import 'hammerjs';

import { VehicleService } from './vehicle.service';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './mock-data/mock.data';

//angular-material module for styles
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatSidenavModule,MatMenuModule,
  MatToolbarModule,MatCheckboxModule,MatSelectModule, MatListModule,MatButtonToggleModule,MatTableModule,MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectComponent } from './select/select.component';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './home-screen/navbar/navbar.component';
import { SelectionScreenComponent } from './home-screen/selection-screen/selection-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectionScreenComponent,
    SelectComponent,
    ViewComponent,
    TableComponent,
    NavbarComponent,
    SelectionScreenComponent,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    InMemoryWebApiModule.forRoot(MockData),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

