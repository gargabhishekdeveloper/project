import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
declare var firebase : any;

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  employees =[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    /*this._employeeService.getEmployees()
    .subscribe(resEmployeeData => this.employees = resEmployeeData);*/
    //this.employees = this._employeeService.getEmployees();
    this.getdata();
  }

  getdata(){
    firebase.database().ref('/').on('child_added', (snapshot)=>{
      console.log(snapshot.val());
      this.employees.push(snapshot.val());
    })
  }

}
