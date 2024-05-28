import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-pdf-viewer',
  // standalone: true,
  // imports: [CommonModule,ReactiveFormsModule,  BrowserModule, PdfViewerModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  @Input() pdfSrc: string | ArrayBuffer | null = null;

}
