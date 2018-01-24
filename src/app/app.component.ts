import { Component } from '@angular/core';
import { EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[EmployeeService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
