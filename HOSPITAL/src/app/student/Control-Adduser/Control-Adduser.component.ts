import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { login1, Students } from '../../students';
import {consulant} from '../../students';

@Component({
  selector: 'app-newlogin',
  templateUrl: './Control-Adduser.component.html',
  styleUrls: ['./Control-Adduser.component.css']
})
export class NewloginComponent implements OnInit {
  declare Students : Students[];
  declare consulant : consulant[];
  declare login1 : login1[];
  
  uname = ''
declare permission : JSON
declare insert : boolean
declare edit : boolean
declare delete : boolean

  constructor(private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute    ) {

   }
   showMeedit:boolean=false
   showMesave:boolean=true
   
   declare addForm: FormGroup;
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
    });

     this.addForm = this.formBuilder.group({
      UID:['', Validators.required],
      stuserid:['', Validators.required],
      stpassword:['', Validators.required],
      stusername:['', Validators.required],
      department:['Pathology Department', Validators.required],
    });

    //call username 
    this.uname = this._studentservice.getUsername();
    //call permission
    this._studentservice.getuserpermission(this.uname)
    .subscribe(data => {
      this.permission = data
      this.edit = JSON.parse(JSON.stringify(this.permission))["Users"]["NewUser"]["edt"] == "Y";
      this.delete = JSON.parse(JSON.stringify(this.permission))["Users"]["NewUser"]["del"] == "Y";
    });

  }
  onSubmitedit(){
    this._studentservice.updateNuser(this.addForm.value)
    .subscribe(data => {
      alert('Records Modify...Thanks');
      this.showMeedit = false
      this.showMesave = this.insert && true
      window.location.reload();
    });
    
  }
  onSubmit(){
    this._studentservice.createNuser(this.addForm.value)
   .subscribe(data => {
    alert('Records Saved...Thanks');

    this._studentservice.gettableUser()
    .subscribe((data:login1[]) => {
      this.login1 = data;
    this.addForm = this.formBuilder.group({
      UID:['', Validators.required],
      stuserid:['', Validators.required],
      stusername:['', Validators.required],
      department:['Pathology Department', Validators.required],
    });
    });
   });
  
  }
  deleter(login1:login1):void{
    this._studentservice.deleteNuser(login1.stuserid)
    .subscribe(data => {
        this.login1 = this.login1.filter(u => u !== login1); 
    }) 
  }
  editer(login1:login1):void{
    this._studentservice.getuserbyid(login1.UID)
    .subscribe((data:any) => {
     data = data[0]
    this.addForm.patchValue(data);
    }) 
}
tooletageedit(){
  this.showMeedit = true
  this.showMesave = this.insert && false
}
}
