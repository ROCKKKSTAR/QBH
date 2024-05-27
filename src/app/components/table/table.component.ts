import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  editUser(user: any): void {
    // Logic to edit user
  }

  deleteUser(user: any): void {
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }

  generatePDF(): void {
    this.userService.generatePDF(this.users);
  }

  downloadPDF(): void {
    this.userService.downloadPDF();
  }

  viewPDF(): void {
    this.userService.viewPDF();
  }
}
