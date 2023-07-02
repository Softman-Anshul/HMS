import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, ActivatedRoute} from '@angular/router';
import {login1, userpermission} from './../../students';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {
  declare userpermission :userpermission[];
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
    });

     
    });
  }
  onSubmit(){
    console.log(this.selectedUser);
    this._studentservice.saveuserpermission(this.userpermission,this.selectedUser)
    .subscribe((data:any) => {
      alert("Thanks");
    });
  }
  searchquery(){
    
  }

  userChange(){
    this._studentservice.userpermissionForUser(this.selectedUser)
    .subscribe((data:any) => {
     this.userpermission = data;
    });

  }
}
