import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { department, group } from './../../students';

@Component({
  selector: 'app-testgroup',
  templateUrl: './testgroup.component.html',
  styleUrls: ['./testgroup.component.css']
})
export class TestgroupComponent implements OnInit {
  declare group : group[];
  declare consulant : department[];
  declare addForm: FormGroup;
  Mobile = false;

  constructor(
    private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
  ) { }
  
  showMeedit:boolean=false
  showMesave:boolean=true
  uname = '';
  ngOnInit(): void {
       //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }

   this.Mobile = this._studentservice.isMob()
   
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
    });

     this.addForm = this.formBuilder.group({
      group_id:['', Validators.required],
      dep_name:['', Validators.required],
      group_name:['', Validators.required],
      sno:['', Validators.required],

    });
  }
  onSubmit(){
    if(this.validation()){
  this._studentservice.creategroup(this.addForm.value)
 .subscribe(data => {
   alert('Records Saved...Thanks');
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
  });
});
    this.addForm = this.formBuilder.group({
      group_id:['', Validators.required],
      dep_name:['', Validators.required],
      group_name:['', Validators.required],
      sno:['', Validators.required],
   
    });
   
  }
}
  onSubmitedit(){
    if(this.validation()){
    this._studentservice.updategroup(this.addForm.value)
    .subscribe(data => {
      alert('Records Modify...Thanks');
      this.showMeedit = false
      this.showMesave = true
       this._studentservice.gettablegroup()
       .subscribe((data:group[]) => {
       this.group = data;
     });
   });
       this.addForm = this.formBuilder.group({
         group_id:['', Validators.required],
         dep_name:['', Validators.required],
         group_name:['', Validators.required],
         sno:['', Validators.required],
      
       });
  }
}
  deleter(group:group):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deletegroup(group.group_id)
    .subscribe(data => {
       this.group = this.group.filter(u => u !== group); 
   }) 
   } 
   else 
   {
     () => {} 
   }
  }
  
  editer(group:group):void{
     this._studentservice.getdegroupbyid(group.group_id)
     .subscribe((data:any) => {
      data = data[0]
     this.addForm.patchValue(data);
     }) 
}
tooletageedit(){
  this.showMeedit = true
  this.showMesave = false
}
validation(): boolean{
  if(this.addForm.value.dep_name == "" || this.addForm.value.dep_name == undefined){
    alert("Department Name is mandatory");
    return false
  }
  if(this.addForm.value.group_name == "" || this.addForm.value.group_name == undefined){
    alert("Group Name is mandatory");
    return false
  }
  if(this.addForm.value.sno == "" || this.addForm.value.sno == undefined){
    alert("Serial Number is mandatory");
    return false
  }

  return true
}
}
