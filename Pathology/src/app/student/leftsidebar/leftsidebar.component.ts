import { Component, OnInit } from '@angular/core';
import { sidebar, Students } from './../../students';
import { StudentsService } from './../../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
  uname = ''
  declare permission : JSON
  declare showconsultant : boolean
  ListOfSideBar = [
    { sidebartext: "Consultant", url : "/homepage/add","icon":"fas fa-user-doctor"},
    { sidebartext: "TestMaster", url : "/homepage/edit","icon":"fa fa-text-width"},
    { sidebartext: "TestBooking", url : "/homepage/list","icon":"fa fa-text-width"},
    { sidebartext: "Reports", url : "/homepage/reportmaster","icon":"fa fa-print"},
    { sidebartext: "User", url : "newlogin","icon":"fa fa-user "},
    { sidebartext: "Controls", url : "control","icon":"fa fa-wrench"},

  ];
  
  SideBars : sidebar[] = [];

  constructor(private _studentservice:StudentsService,
  private router: Router,) { }

  ngOnInit(): void {
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
   
    this._studentservice.getuserpermission(this.uname)
    .subscribe(data => {
      this.permission = data
      for(let i=0;i<this.ListOfSideBar.length;i++){
        if(JSON.parse(JSON.stringify(this.permission))['Menu'][this.ListOfSideBar[i].sidebartext]['inst'] == 'Y'){
          this.SideBars.push(this.ListOfSideBar[i]);
        }
      };
    });
  }
  
}
