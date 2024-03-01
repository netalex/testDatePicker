import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DatePickerContainerComponent } from './date-picker-container/date-picker-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Material components
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'it-IT' }, // Assicurati di configurare la locale corretta
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' }, // Assicurati di configurare la locale corretta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
