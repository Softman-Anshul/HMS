import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';
import { sidebar } from './../../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage-mobile',
  templateUrl: './mainpage-mobile.component.html',
  styleUrls: ['./mainpage-mobile.component.css']
})
export class MainpageMobileComponent implements OnInit {

  uname = ''
  declare permission : JSON
  declare showconsultant : boolean
  company = '';
  ListOfSideBar = [
    { sidebartext: "Consultant", url : "/homepage/add","icon":"fas fa-user-doctor"},
    { sidebartext: "TestMaster", url : "/homepage/edit","icon":"fa fa-text-width"},
    { sidebartext: "TestBooking", url : "/homepage/list","icon":"fa fa-text-width"},
    { sidebartext: "Reports", url : "/homepage/reportmaster","icon":"fa fa-print"},
    { sidebartext: "User", url : "newlogin","icon":"fa fa-user "},
    { sidebartext: "Controls", url : "control","icon":"fa fa-wrench"},

  ];
  SideBars : sidebar[] = [];
  home = true;

  constructor(private _studentservice:StudentsService, private router: Router) { }

  ngOnInit(): void {
    this._studentservice.getCompany()
      .subscribe((data:any) => {
        this.company = data[0].Comp_nam;
    });

    this.uname = this._studentservice.getUsername();
    //call permission
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

  route(data:any){
    this.home = false;
    this.router.navigate([data.url]);
  }

  toggle(){
    document.getElementById("snav")?.setAttribute("fixedInViewport","false");

  }
}
