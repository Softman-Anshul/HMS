import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { BackupdatabaseComponent } from '../Control-Backupdatabase/Control-Backupdatabase.component';
import {login1,userpermission} from '../../students';

@Component({
  selector: 'app-control',
  templateUrl: './Menu-Control.component.html',
  styleUrls: ['./Menu-Control.component.css']
})
export class ControlComponent implements OnInit {
  declare login1 : login1[];
  selectedUser = "";

  uname = ''
  pass='';
  pass1='';
  declare permission : JSON
  declare showadduser:  boolean
  declare showuserpermission : boolean
  declare showkey : boolean
  declare showprofile : boolean
  declare showsetup : boolean
  declare showpatient : boolean
  declare showbackup : boolean
  declare showpassword : boolean

  Mobile = false;
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Mobile = this._studentservice.isMob();

    this._studentservice.gettableUser()
    .subscribe((data:login1[]) => {
    this.login1 = data;
  });
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
   //call permission
this._studentservice.getuserpermission(this.uname)
.subscribe(data => {
  this._studentservice.permission = data
  if (this._studentservice.checkPermission("Menu", "Controls", "inst") ) {

      this.showadduser = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Add User"]["inst"] == "Y";
      this.showuserpermission = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["User Permission"]["inst"] == "Y";
      this.showkey = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Key Update"]["inst"] == "Y";
      this.showprofile = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Profile Change"]["inst"] == "Y";
      this.showsetup = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Control Setup"]["inst"] == "Y";
      this.showpatient = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Patient Information Change"]["inst"] == "Y";
      this.showbackup = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Backup"]["inst"] == "Y";
      this.showpassword = JSON.parse(JSON.stringify(this._studentservice.permission))["Controls"]["Password Change"]["inst"] == "Y";
    }
    else{
      this.router.navigate(['/homepage/main'])
    }

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
    alert("Thanks")
    window.location.reload();
    this.router.navigate(['homepage/control']);
    this._studentservice.passwordchange(this.uname,pass)
    .subscribe((data:any) => {
    });
  }
  pchange(pass1:any){
    alert("Thanks")
    window.location.reload();
    this.router.navigate(['homepage/control']);

    this._studentservice.passwordchange(this.selectedUser,pass1)
    .subscribe((data:any) => {
    });
  }
}
