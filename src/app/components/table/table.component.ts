import { Component, Input, OnInit, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule,MatButtonModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  @Input() userDataTable: any[] = []
  // users: any[] = [];

  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'address', 'actions'];
  dataSourceUserData!: MatTableDataSource<any>;
 @Output() addUser = new EventEmitter<any>()

 @Input() users: any[] = [];
 @Output() generatePDF = new EventEmitter<void>();
 @Output() downloadPDF = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    // this.dataSourceUserData = new MatTableDataSource(this.users)
    this.dataSourceUserData = new MatTableDataSource(this.userDataTable)
  }

  ngOnChanges(_changes: SimpleChanges) {

    this.dataSourceUserData = new MatTableDataSource(this.userDataTable)
  }

  editUser(user: any): void {
    // Logic to edit user
  }

  deleteUser(user: any): void {
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }

  // generatePDF(): void {
  //   this.userService.generatePDF(this.users);
  // }

  // downloadPDF(): void {
  //   this.userService.downloadPDF();
  // }

  onGeneratePDF() {
    this.generatePDF.emit();
  }

  onDownloadPDF() {
    this.downloadPDF.emit();
  }

  viewPDF(): void {
    this.userService.viewPDF();
  }

  addNewData(): void {
    this.addUser.emit({status: true})
    this.users = this.userService.getUsers();
    // this.dataSourceUserData = new MatTableDataSource(this.users)
  }
}
// export { MatTableModule };

