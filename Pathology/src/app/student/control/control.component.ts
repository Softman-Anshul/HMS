import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  uname = ''
  declare permission : JSON
  declare showtestrate : boolean
  declare showprofile : boolean
  declare showuserpermission : boolean
  declare showmessage : boolean
  declare showprinting : boolean
  declare Billingbooking : boolean
  declare Refundbooking : boolean
  declare showkey : boolean
  Mobile = false;
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute) { }

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
      this.showtestrate = JSON.parse(JSON.stringify(this.permission))["Controls"]["Test Rate Setting"]["inst"] == "Y";
      this.showprofile = JSON.parse(JSON.stringify(this.permission))["Controls"]["Profile Change"]["inst"] == "Y";
      this.showuserpermission = JSON.parse(JSON.stringify(this.permission))["Controls"]["User Permission"]["inst"] == "Y";
      this.showkey = JSON.parse(JSON.stringify(this.permission))["Controls"]["Key Update"]["inst"] == "Y";

      // this.showmessage = JSON.parse(JSON.stringify(this.permission))["Controls"]["Message Control Setting"]["inst"] == "Y";
      // this.showprinting = JSON.parse(JSON.stringify(this.permission))["Controls"]["Printing Setting"]["inst"] == "Y";
      
    });
  }
  testratechange(){
    this.router.navigate(['homepage/testratechange']);
  }
  profilechange(){
    this.router.navigate(['homepage/profilechange']);
  }
  userpermission(){
    this.router.navigate(['homepage/userpermission']);
    
  }
  keyupdate(){
    this.router.navigate(['homepage/keyupdate']);
    
  }
}
