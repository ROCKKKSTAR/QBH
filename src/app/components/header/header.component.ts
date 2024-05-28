import { Component, Input, SimpleChanges } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatTableModule, FormComponent, TableComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userData: any[] =[]
  showTable: boolean = false;
  newUser: boolean = false;
  dataSourceUserData: any;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.newUser = true
    // console.log('userData', this.userData)
  }

  ngOnChanges(_changes: SimpleChanges) {

    this.userData = this.userService.getUsers();
  }
  showUserData(inputValue: Event): void {
    console.log('inputValue', inputValue)
    const formEvent = inputValue as Event & { status: boolean,formData: any };
    // this.userData.push(formEvent.formData);
    
    this.userData = this.userService.getUsers();
    this.showTable = formEvent.status
    this.newUser = false
  }

  addNewUserData(value: Event): void{
    const formEvent = value as Event & { status: boolean};
    this.newUser = formEvent.status

  }

  // users: any[] = [];
  // // pdfDoc: jsPDF | null = null;

  // onUserAdded(user: any) {
  //   this.users.push(user);
  // }

  // onGeneratePDF() {
  //   const doc = new jsPDF();
  //   autoTable(doc, { 
  //     head: [['Name', 'Email', 'Phone Number', 'Address']],
  //     body: this.users.map(user => [user.name, user.email, user.phoneNumber, user.address]),
  //   });
  //   // this.pdfDoc = doc;
  // }

  // onDownloadPDF() {
  //   // if (this.pdfDoc) {
  //   //   this.pdfDoc.save('users.pdf');
  //   // } else {
  //   //   alert('Please generate the PDF first');
  //   // }
  // }

}
// function autoTable(doc: jsPDF, arg1: { head: string[][]; body: any[][]; }) {
//   throw new Error('Function not implemented.');
// }

