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
address = '';
address1 = '';
city = '';
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
    // { sidebartext: "Pathology", url : "/homepage/Pathology","icon":"fa fa-text-width"},
    // { sidebartext: "Account", url : "/homepage/Account","icon":"fa fa-life-ring"},
    { sidebartext: "Controls", url : "control","icon":"fa fa-wrench",} 
];
SideBars : sidebar[] = [];

  constructor(private _studentservice:StudentsService,
    private router: Router
  ) { }

  declare userid:string
  declare Comp_nam:string;
  declare comp_add:string;
  declare comp_add1:string;
  declare comp_city:string;
  declare Years:string;
  initials = '';

  isMobile = false;
  uname = ''
  declare permission : JSON


  ngOnInit(): void {
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.company = data[0].Comp_nam;
    this.address = data[0].Comp_add;
    this.address1 = data[0].Comp_add1;
    this.city = data[0].Comp_city;
    this.Years = data[0].years;

    });

    if(this._studentservice.isMob()){
      this.isMobile = true;
    }

    this.uname = this._studentservice.getUsername();

    if(this.uname == ''){
      this.router.navigate(['']);
    }

    this.initials = this.uname.charAt(0).toUpperCase();

    
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

  toggleProfile(){
      let profile = document.getElementById("dropdown");
      if(profile != null){
        let display =  window.getComputedStyle(profile).display;
        if(display == "none"){
          profile.style.display =  "block";
        } else {
          profile.style.display =  "none";
        }
      }
  }

  logout(){
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    this.router.navigate([""]);
  }
}
