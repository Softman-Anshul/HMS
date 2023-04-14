import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {discardtemp, OPD} from '../../students';
import { discard} from '../../students';
import {HttpClient} from '@angular/common/http';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { docClick } from '@syncfusion/ej2-angular-richtexteditor';
import {disheading} from '../../students';

@Component({
  selector: 'app-ipd-discharge-card-template',
  templateUrl: './ipd-discharge-card-template.component.html',
  styleUrls: ['./ipd-discharge-card-template.component.css']
})
export class IPDDischargeCardTemplateComponent implements OnInit {
  uname = '';
  discard = new discardtemp();
  stuserid='';
  imageSrc: string | undefined;
  imageSrc1: string | undefined;
  imageSrc2: string | undefined;
  declare distempheading:discardtemp[];
  disheading1 = new disheading();
  declare index:number;

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router,
    private https:HttpClient,
    private formBuilder : FormBuilder,
    public dialogRef: MatDialogRef<IPDDischargeCardTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
   ) {
    }

    loginForm= new FormGroup({
      selectedtext: new FormControl()
    });
  ngOnInit(): void {
 //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

    const routerParams = this.routes.snapshot.params;
    
    //CALL Heading
    this._studentservice.getdischargeheading()
    .subscribe((data:any) => {
      this.disheading1 = data[0];
    });

        //CALL tempname Heading
        this._studentservice.getdischargetempheading()
        .subscribe((data:any) => {
          this.distempheading = data;

          
      //     //Load tempdetails by tempname
      // this._studentservice.dischargetempload(this.distempheading)
      // .subscribe((data:any) => {
      //  this.discard = data[0];
  
      //  });
        });


       //call maxcardno
       this._studentservice.maxdistempno()
       .subscribe((data:any) => {
        this.discard.tempno = data;

      
        });

}
 
onNoClick(): void {
  this.dialogRef.close();
}
onsave(){
 let e_one = document.getElementById("editor-one")
 if(e_one != null){
   this.discard.one = e_one.innerHTML;
 } 
 let e_two = document.getElementById("editor-two")
 if(e_two != null){
   this.discard.two = e_two.innerHTML;
 } 
 let e_three = document.getElementById("editor-three")
 if(e_three != null){
   this.discard.three = e_three.innerHTML;
 } 
 let e_four = document.getElementById("editor-four")
 if(e_four != null){
   this.discard.four = e_four.innerHTML;
 } 
 let e_five = document.getElementById("editor-five")
 if(e_five != null){
   this.discard.five = e_five.innerHTML;
 } 
 let e_six = document.getElementById("editor-six")
 if(e_six != null){
   this.discard.six = e_six.innerHTML;
 } 
 let e_seven = document.getElementById("editor-seven")
   if(e_seven != null){
     this.discard.seven = e_seven.innerHTML;
   } 
    const routerParams = this.routes.snapshot.params; 
     this._studentservice.dischargetempinsert(this.discard)
        .subscribe(data => {
          alert("Thanks")
          window.location.reload();
         });
}

selectedFile(arg0: string, selectedFile: any, name: any) {
throw new Error('Method not implemented.');
}
bold(selectedtext: any):void{
if(selectedtext == "a"){
alert("A")
}
else{
alert("others")
}
}
selectTemp(event:any){
  this.index = event.target.value;
            this._studentservice.dischargetempload(this.index)
            .subscribe((data:any) => {
             this.discard = data[0];
 
             });
  }
}
