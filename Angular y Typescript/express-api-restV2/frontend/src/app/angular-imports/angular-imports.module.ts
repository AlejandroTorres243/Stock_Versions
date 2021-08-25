import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  // Navegación
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  // Formularios
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  // Proveedor de fechas
  MatNativeDateModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatInputModule,
  // Datatable
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  // Iconos
  MatIconModule,
  // Diálogos
  MatDialogModule
} from '@angular/material';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AngularImportsModule { }
