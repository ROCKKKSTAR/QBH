import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component'; // Only if not standalone
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    PdfViewerComponent, // Uncomment if PdfViewerComponent is not standalone
  ],
  imports: [
    PdfViewerModule,
    MatTableModule,
    BrowserModule,
    ReactiveFormsModule,
    PdfViewerModule, // No need to import here if PdfViewerComponent is standalone
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line

})
export class AppModule { }
