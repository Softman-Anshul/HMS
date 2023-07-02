import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-editt-student',
  templateUrl: './editt-student.component.html',
  styleUrls: ['./editt-student.component.css']
})
export class EdittStudentComponent implements OnInit {

  uname = ''
declare permission : JSON
declare ShowDepartment : boolean
declare ShowGroup : boolean
declare ShowOutsideLab : boolean
declare ShowCity : boolean
declare ShowTest : boolean
declare ShowControl : boolean
Mobile = false;

  constructor(private router: Router,
    private _studentservice:StudentsService,    ) {

   }
  declare addForm: FormGroup;
  ngOnInit(): void {

    this.Mobile = this._studentservice.isMob();

      //call username 
      this.uname = this._studentservice.getUsername();
      if(this.uname == '')
      {
        this.router.navigate(['']);
      }
    //call permission
    this._studentservice.getuserpermission(this.uname)
    .subscribe(data => {
      this.permission = data
      this.ShowDepartment = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["Department"]["inst"] == "Y";
      this.ShowGroup = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["Group"]["inst"] == "Y";
      this.ShowOutsideLab = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["OutsideLab"]["inst"] == "Y";
      this.ShowCity = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["City"]["inst"] == "Y";
      this.ShowTest = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["Test"]["inst"] == "Y";
      this.ShowControl = JSON.parse(JSON.stringify(this.permission))["TestMaster"]["Control"]["inst"] == "Y";
     });

  };
onSubmitd(){
this.router.navigate(['homepage/testdepartment']);
}
onSubmitg(){
  this.router.navigate(['homepage/testgroup']);
  }
  onSubmittest(){
    this.router.navigate(['homepage/testmaster']);
    }
  onSubmitCity(){
    this.router.navigate(['homepage/testcity']);
    }
    onSubmitLAB(){
      this.router.navigate(['homepage/Otherlab']);
    }
   
}
