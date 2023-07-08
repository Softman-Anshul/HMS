import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {Cityname, testmaster} from '../../students';

@Component({
  selector: 'app-master-charges',
  templateUrl: './Master-Charges.component.html',
  styleUrls: ['./Master-Charges.component.css']
})
export class MasterChargesComponent implements OnInit {
  DefaultCity = "Bareilly";
  DefaultValue = "Male";
  declare addForm: FormGroup;
  declare Cityname :Cityname[];
  declare Testmaster :testmaster[];
  showMeedit:boolean=false
  showMesave:boolean=true
  id: any;
  resultType= '';
  itmName="";
  itmtype="";
  declare search:string;

  constructor(private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute ) { }

  ngOnInit(): void {
    //call City
    this._studentservice.gettablecityname()
    .subscribe((data:Cityname[]) => {
      this.Cityname = data;
    });  
     //call type
     this._studentservice.gettabletestname()
     .subscribe((data:testmaster[]) => {
       this.Testmaster = data;
     });  

    this.addForm = this.formBuilder.group({
      chrgsGrp:['', Validators.required],
      chrgsName:['', Validators.required],
      chrgsName1:['', Validators.required],
      chrgAmt:['', Validators.required],
      chrgsCat:['', Validators.required],
      sNo:['', Validators.required],
      type:['', Validators.required],
      type1:['', Validators.required],
      Servicetax:['', Validators.required],
      ipdchargs:['', Validators.required],
      IExp:['', Validators.required],
      testcode:['', Validators.required],
      itmName:['', Validators.required],
      itmtype:['', Validators.required],
    });
  }
  onSubmit(){
    this._studentservice.createtestmasterh(this.addForm.value)
    .subscribe(data => {
      alert('Records Saved...Thanks');
      window.location.reload();
    });
  }
  deleter(student:testmaster):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deleteTest(student.sNo)
      .subscribe(data => {
        this.Testmaster = this.Testmaster.filter(u => u !== student); 
      }) 
    } 
    else 
    {
      () => {} 
    }
  }
  editer(student:any):void{
    this.id = student;
    //  this.router.navigate(['homepage/consultantedit/' + this.id]);
    this._studentservice.getTestbyid(this.id)
    .subscribe((data:any) => {
      data = data[0]
      // this.addForm.patchValue({data});
      this.addForm.controls['sNo'].setValue(data.sNo);
      this.addForm.controls['chrgsName'].setValue(data.chrgsName);
      this.addForm.controls['chrgAmt'].setValue(data.chrgAmt);
      this.addForm.controls['ipdchargs'].setValue(data.ipdchargs);
      this.addForm.controls['type'].setValue(data.type);
      this.addForm.controls['itmName'].setValue(data.chrgsName);
      this.addForm.controls['itmtype'].setValue(data.type);

    });
  }
  onSubmitedit(){
    this._studentservice.updateTest(this.addForm.value)
    .subscribe(data => {
      alert('Modify Records Saved...Thanks');
      window.location.reload();
        });
  }
  Depart(){
    this.router.navigate(['homepage/radd']);
  }
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }
  searchdirect(){
//call type
this._studentservice.gettestsearchname(this.search)
.subscribe((data:testmaster[]) => {
  this.Testmaster = data;
}); 
  }

}
