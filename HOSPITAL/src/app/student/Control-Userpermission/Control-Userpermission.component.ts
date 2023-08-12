import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import {login1,userpermission} from '../../students';

@Component({
  selector: 'app-user-permission',
  templateUrl: './Control-Userpermission.component.html',
  styleUrls: ['./Control-Userpermission.component.css']
})
export class UserPermissionComponent implements OnInit {
  declare userpermission :userpermission[];
  declare userperm :userpermission[];
  declare search:string;
  declare selected : userpermission;
  declare login1 : login1[];
  selectedUser = "";
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

    this._studentservice.gettableUser()
    .subscribe((data:login1[]) => {
    this.login1 = data;
    this.selectedUser = this.login1[0].stuserid
    
    this._studentservice.userpermissionForUser(this.selectedUser)
    .subscribe((data:any) => {
      this.userpermission = data;
      this.userperm = this.userpermission;
      this.userperm.forEach(element => {
        if(element.inst.toUpperCase() == "Y"){
          element.instcheck = true;
        } else {
          element.instcheck = false;
        }
        if(element.edt.toUpperCase() == "Y"){
          element.edtcheck = true;
        } else {
          element.edtcheck = false;
        }
        if(element.del.toUpperCase() == "Y"){
          element.delcheck = true;
        } else {
          element.delcheck = false;
        }
      });
    });

     
    });
  }
  onSubmit(){
     this.userperm.forEach(element => {
      if(!element.instcheck){
        element.inst = 'N'
      } else if (element.inst.toUpperCase() == 'X'){
        element.inst = 'X'
      } else {
        element.inst = 'Y'
      }
      if(!element.delcheck){
        element.del = 'N'
      }else if (element.del.toUpperCase() == 'X'){
        element.del = 'X'
      } else {
        element.del = 'Y'
      }
      if(!element.delcheck){
        element.edt = 'N'
      }else if (element.del.toUpperCase() == 'X'){
        element.del = 'X'
      } else {
        element.del = 'Y'
      }
     })
    this._studentservice.saveuserpermission(this.userperm,this.selectedUser)
    .subscribe((data:any) => {
      alert("Thanks");
      window.location.reload();
    });
  }
  searchquery(){
    
  }

  userChange(){
    this._studentservice.userpermissionForUser(this.selectedUser)
    .subscribe((data:any) => {
     this.userpermission = data;
     this.userperm = this.userpermission;
     this.userperm.forEach(element => {
       if(element.inst.toUpperCase() == "Y"){
         element.instcheck = true;
       } else {
         element.instcheck = false;
       }
       if(element.edt.toUpperCase() == "Y"){
         element.edtcheck = true;
       } else {
         element.edtcheck = false;
       }
       if(element.del.toUpperCase() == "Y"){
         element.delcheck = true;
       } else {
         element.delcheck = false;
       }
     });
    });

  }
}
