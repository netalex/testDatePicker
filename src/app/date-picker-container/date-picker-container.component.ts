import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material/datepicker';



@Component({
  selector: 'app-date-picker-container',
  template: `




    <div class="grid-container">
      <div style="position: relative; top:125px; right:0px;">
        <mat-form-field
          style="margin-left: 30px; margin-bottom: 1px;"
          class="example-form-field"
        >
          <mat-label>Scegli una data</mat-label>
          <input
            (dateChange)="onDateChange()"
            matInput
            [matDatepicker]="datepicker"
            [(ngModel)]="dateForFiltering"
          />

          <mat-datepicker-toggle
            matIconSuffix
            [for]="datepicker"
          ></mat-datepicker-toggle>
          <mat-datepicker #datepicker>
            <mat-datepicker-actions>
              <button mat-button matDatepickerCancel>Cancella</button>
              <button mat-button (click)="setToday()">Oggi</button>
              <button mat-raised-button color="primary" matDatepickerApply>
                Applica
              </button>
            </mat-datepicker-actions>
          </mat-datepicker>
        </mat-form-field>
      </div>
    </div>

    <div class="grid-container">pippo</div>

    <div class="grid-container">
      <pre>{{ dataSource | json }}</pre>
    </div>
  `,
  styles: [
    `
      .grid-container {
        margin-top: 50px;
      }
    `,
  ],
})
export class DatePickerContainerComponent implements OnInit {
  dateForFiltering: Date = new Date();
  dataSource: any[] = [];
  @ViewChild(MatDatepicker) datepicker!: MatDatepicker<Date>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    // Utilizza un URL di JSONPlaceholder come esempio
    this.http
      .get<any[]>('https://fake-json-api.mock.beeceptor.com/notifications')
      .subscribe({
        next: (res) => {
          console.log('date for filtering: ', this.dateForFiltering);
          const resFIlter = res.filter(
            (el) =>
              new Date(el.timestamp).valueOf() <=
              this.dateForFiltering.valueOf()
          ); // Filtra i dati in base alla data selezionata
          this.dataSource = resFIlter.slice(0, 3); // Prendi i primi 4 post come esempio
          console.log(this.dataSource, res); // Visualizza i dati in console o utilizzali come necessario
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  onDateChange() {
    console.log('on date change ', this.dateForFiltering);
    this.getDataFromBackend();
  }

  setToday() {
    const today = new Date();
    this.dateForFiltering = today; // Imposta la data odierna
    this.datepicker.close(); // Chiude il datepicker
    this.onDateChange(); // Richiama il servizio per aggiornare i dati
  }
}
