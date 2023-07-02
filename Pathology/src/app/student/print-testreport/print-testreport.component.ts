import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print-testreport',
  templateUrl: './print-testreport.component.html',
  styleUrls: ['./print-testreport.component.css']
})
export class PrintTestreportComponent implements OnInit {
uname = '';
  constructor(private _studentservice:StudentsService,
    private router: Router,) { }

  ngOnInit(): void {
     //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
  }

}
