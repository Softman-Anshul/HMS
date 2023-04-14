import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { BackupdatabaseComponent } from '../Control-Backupdatabase/Control-Backupdatabase.component';

@Component({
  selector: 'app-control',
  templateUrl: './Menu-Control.component.html',
  styleUrls: ['./Menu-Control.component.css']
})
export class ControlComponent implements OnInit {
  uname = ''
  pass='';
  declare permission : JSON
  declare showpatient : boolean
  declare showprofile : boolean
  declare showadduser:  boolean
  declare showuserpermission : boolean
  declare showkey : boolean
  declare showsetup : boolean
  declare showbackup : boolean

  Mobile = false;
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute,
    public dialog: MatDialog) { }

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
      this.showadduser = JSON.parse(JSON.stringify(this.permission))["Controls"]["Add User"]["inst"] == "Y";
      this.showuserpermission = JSON.parse(JSON.stringify(this.permission))["Controls"]["User Permission"]["inst"] == "Y";
      this.showkey = JSON.parse(JSON.stringify(this.permission))["Controls"]["Key Update"]["inst"] == "Y";
      this.showpatient = JSON.parse(JSON.stringify(this.permission))["Controls"]["Patient Information Change"]["inst"] == "Y";
      this.showsetup = JSON.parse(JSON.stringify(this.permission))["Controls"]["Control Setup"]["inst"] == "Y";
      this.showprofile = JSON.parse(JSON.stringify(this.permission))["Controls"]["Profile Change"]["inst"] == "Y";
      this.showbackup = JSON.parse(JSON.stringify(this.permission))["Controls"]["Backup"]["inst"] == "Y";
    });
  }
  adduser(){
    this.router.navigate(['homepage/newlogin']);
  }
  userpermission(){
    this.router.navigate(['homepage/userpermission']);
  }
  keyupdate(){
    this.router.navigate(['homepage/keyupdate']);
  }
  profilechange(){
    this.router.navigate(['homepage/profilechange']);
  }
  setup(){
    this.router.navigate(['homepage/setup']);
  }
 patientchange(){
    this.router.navigate(['homepage/patientchange']);
  }
//    this.router.navigate(['homepage/Backup']);
  backupdatabase(): void {
    const dialogRef = this.dialog.open(BackupdatabaseComponent, {
      height:'450px', width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  passwordchange(pass:any){
    this._studentservice.passwordchange(this.uname,pass)
    .subscribe((data:any) => {
      alert('Records Saved...Thanks');
    });
  }
}
