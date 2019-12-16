import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
EmployeeId: '';
EmployeeName: '';
EmployeePhone: '';
EmployeeEmail: '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['/login']);
  }
}
