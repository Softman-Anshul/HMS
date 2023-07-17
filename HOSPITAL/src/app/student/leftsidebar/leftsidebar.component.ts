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
    { sidebartext: "Master", url : "/homepage/edit","icon":"fas fa-user-doctor"},
    { sidebartext: "Dashboard", url : "/homepage/dashboard","icon":"fa fa-tachometer"},
    { sidebartext: "OPD", url : "/homepage/opdlist","icon":"fa fa-stethoscope"},
    { sidebartext: "OPD Reports", url : "/homepage/opd-reportmaster","icon":"fa fa-print"},
    { sidebartext: "TEST", url : "/homepage/list","icon":"fa fa-text-width"},
    { sidebartext: "TEST Reports", url : "/homepage/Test-reportmaster","icon":"fa fa-print"},
    { sidebartext: "IPD Admit", url : "/homepage/ipdlist","icon":"fa fa-stethoscope"},
    { sidebartext: "IPD Discharge", url : "/homepage/ipddischarge","icon":"fa fa-wrench" },
    { sidebartext: "IPD Reports", url : "/homepage/opd-reportmaster","icon":"fa fa-print"},
    { sidebartext: "MIS", url : "/homepage/mis-master","icon":"fa fa-life-ring"},
    { sidebartext: "Pathology", url : "/homepage/Pathology","icon":"fa fa-text-width"},
    { sidebartext: "Account", url : "/homepage/Account","icon":"fa fa-life-ring"},
    { sidebartext: "Controls", url : "control","icon":"fa fa-wrench",} 
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
      this._studentservice.permission = data
      for(let i=0;i<this.ListOfSideBar.length;i++){
        if(JSON.parse(JSON.stringify(this._studentservice.permission))['Menu'][this.ListOfSideBar[i].sidebartext]['inst'] == 'Y'){
        this.SideBars.push(this.ListOfSideBar[i]);
      }
      };
    });
  }
  
}
