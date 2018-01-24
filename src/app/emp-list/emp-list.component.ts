import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
declare var firebase : any;
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 
  employees =[];

  constructor(private _employeeService: EmployeeService ) { }

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

  postdata(id, name, gender){
    firebase.database().ref('/').push({id: id, name:name, gender: gender});
    
    
  }

}
