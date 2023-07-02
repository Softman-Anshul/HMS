import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from './../../students.service';
import { sidebar } from './../../students';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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

  constructor(private _studentservice:StudentsService,
    private router: Router
  ) { }

  declare userid:string
  declare Comp_nam:string
  isMobile = false;
  uname = ''
  declare permission : JSON


  ngOnInit(): void {
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.company = data[0].Comp_nam;
    });

    if(this._studentservice.isMob()){
      this.isMobile = true;
    }

    this.uname = this._studentservice.getUsername();

    if(this.uname == ''){
      this.router.navigate(['']);
    }

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
  onsumit(){
    this.router.navigate(['/homepage/main']);
  }

  logout(){
    this._studentservice.deleteAllCookies();
    this.router.navigate(['/login']);
  }

  

}
