import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Students } from './../../students';
import {consulant} from './../../students';
import {department} from './../../students';

@Component({
  selector: 'app-edit-consultant-master',
  templateUrl: './edit-consultant-master.component.html',
  styleUrls: ['./edit-consultant-master.component.css']
})
export class EditConsultantMasterComponent implements OnInit {
  declare Students : Students[];
  declare consulant : consulant[];
  id: any;
  DefaultValue = "Male";
  DefaultCity = "Bareilly";
  uname = ''
  declare permission : JSON
  declare insert : boolean
  declare edit : boolean
  declare delete : boolean
  Mobile = false;
  declare department :department[];

  showMeedit:boolean=false
  showMesave:boolean=true
  
  declare addForm: FormGroup;
  
  constructor(private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute    ) {

   }
   ngOnInit() {
    this._studentservice.gettablerconsultant()
    .subscribe((data:consulant[]) => {
      this.consulant = data;
    });
    //call Department
    this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
      this.department = data;
    });      
    //call username 
      this.uname = this._studentservice.getUsername();
      if(this.uname == '')
      {
        this.router.navigate(['']);
      }
      this.Mobile = this._studentservice.isMob()
      this.addForm = this.formBuilder.group({
        dctID:['', Validators.required],
        dctName:['', Validators.required],
        dctDOB:['', Validators.required],
        dctMobile:['', Validators.required],
        dctEmail:['', Validators.required],
        dctCity:['', Validators.required],
        dctSplzn:['', Validators.required],
        dctAdrs1:['', Validators.required],
        dctAdrs2:['', Validators.required],
        dctSex:['', Validators.required],
        dctType:['', Validators.required],
        digree:['', Validators.required],
        roomno:['', Validators.required],
        morning:['', Validators.required],
        evening:['', Validators.required],
        Night:['', Validators.required],
        oncall:['', Validators.required],
        digree1:['', Validators.required],
        department:['', Validators.required],
        presmessage:['', Validators.required],
        epres:['', Validators.required],
        digree2:['', Validators.required],
        digree3:['', Validators.required],
        mobileprint:['', Validators.required],
        opdcharges:['', Validators.required],
        Emergency:['', Validators.required],
        validday:['', Validators.required],
        Parcha:['', Validators.required],
      });

     //call username 
     this.uname = this._studentservice.getUsername();
     //call permission
     this._studentservice.getuserpermission(this.uname)
     .subscribe(data => {
      this.permission = data
      this.insert = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["inst"] == "Y";
      this.edit = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["edt"] == "Y";
      this.delete = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["del"] == "Y";
    });
  }
  onSubmit(){
    this._studentservice.createrstudent(this.addForm.value)
    .subscribe(data => {
      alert('Records Saved...Thanks');
      this._studentservice.gettablerconsultant()
      .subscribe((data:consulant[]) => {
        this.consulant = data;
        this.addForm = this.formBuilder.group({
          dctID:['', Validators.required],
        dctName:['', Validators.required],
        dctDOB:['', Validators.required],
        dctMobile:['', Validators.required],
        dctEmail:['', Validators.required],
        dctCity:['', Validators.required],
        dctSplzn:['', Validators.required],
        dctAdrs1:['', Validators.required],
        dctAdrs2:['', Validators.required],
        dctSex:['', Validators.required],
        dctType:['', Validators.required],
        digree:['', Validators.required],
        roomno:['', Validators.required],
        morning:['', Validators.required],
        evening:['', Validators.required],
        Night:['', Validators.required],
        oncall:['', Validators.required],
        digree1:['', Validators.required],
        department:['', Validators.required],
        presmessage:['', Validators.required],
        epres:['', Validators.required],
        digree2:['', Validators.required],
        digree3:['', Validators.required],
        mobileprint:['', Validators.required],
        opdcharges:['', Validators.required],
        Emergency:['', Validators.required],
        validday:['', Validators.required],
        Parcha:['', Validators.required],
        });
      });
    });
  }
  deleter(consulant:consulant):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deleterconsultant(consulant.dctID)
      .subscribe(data => {
        this.consulant = this.consulant.filter(u => u !== consulant); 
      }) 
    } 
    else 
    {
      () => {} 
    }
  }
  editer(doctorid:any):void{
    this.id = doctorid;
    //  this.router.navigate(['homepage/consultantedit/' + this.id]);
    this._studentservice.getconsultantbyid(this.id)
    .subscribe((data:any) => {
      data = data[0]
      // this.addForm.patchValue({data});
      this.addForm.controls['dctID'].setValue(data.dctID);
      this.addForm.controls['dctSex'].setValue(data.dctSex);
      this.addForm.controls['dctName'].setValue(data.dctName);
      this.addForm.controls['department'].setValue(data.department);

      this.addForm.controls['digree'].setValue(data.digree);
      this.addForm.controls['digree1'].setValue(data.digree1);
      this.addForm.controls['digree2'].setValue(data.digree2);

      this.addForm.controls['digree3'].setValue(data.digree3);
      this.addForm.controls['dctSplzn'].setValue(data.dctSplzn);
      this.addForm.controls['roomno'].setValue(data.roomno);

      this.addForm.controls['oncall'].setValue(data.oncall);
      this.addForm.controls['dctMobile'].setValue(data.dctMobile);
      this.addForm.controls['dctEmail'].setValue(data.dctEmail);


      this.addForm.controls['mobileprint'].setValue(data.mobileprint);
      this.addForm.controls['epres'].setValue(data.epres);

      this.addForm.controls['opdcharges'].setValue(data.opdcharges);
      this.addForm.controls['Emergency'].setValue(data.Emergency);
      this.addForm.controls['validday'].setValue(data.validday);
      this.addForm.controls['Parcha'].setValue(data.Parcha);

    });
  } 
  
  onSubmitedit(){
    this._studentservice.updaterconsultant(this.addForm.value)
    .subscribe(data => {
      alert('Modify Records Saved...Thanks');
      window.location.reload();
        });
  }
  depart(){
 this.router.navigate(['homepage/testdepartment']);
  }
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }
}
