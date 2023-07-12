import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { MLC} from '../../students';
import {HttpClient} from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ipd-mlc',
  templateUrl: './ipd-mlc.component.html',
  styleUrls: ['./ipd-mlc.component.css']
})
export class IpdMlcComponent implements OnInit {

  OPD = new OPD();
  uname = '';
  MLC = new MLC();

  imageSrc: string | undefined;
  imageSrc1: string | undefined;
  imageSrc2: string | undefined;
  img1 : any = '';
  img2 : any = '';
  img3 : any = '';

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router,
    private https:HttpClient,
    public dialogRef: MatDialogRef<IpdMlcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    this.MLC.uhID = this.OPD.uhID;
    this.MLC.ipdNo = this.OPD.dcmntNo;
    }

  ngOnInit(): void {
   //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
  
      const routerParams = this.routes.snapshot.params;
      this.MLC.uname = this.uname;
      
   //call maxvchrno
   this._studentservice.mlcgetmaxmlcno()
   .subscribe((data:any) => {
    this.MLC.mlcno = data;
    });
  
    this.MLC.mlcdt = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]
     //call company for f.years
     this._studentservice.getCompany()
     .subscribe((data:any) => {
     this.OPD.Years = data[0].years;
     this.MLC.Years = this.OPD.Years;
    });
    

     //Load Data
   this._studentservice.mlcload(this.MLC.ipdNo,this.MLC.uhID)
   .subscribe((data:any) => {
    this.MLC = data[0];
    this.MLC.ipdNo = this.OPD.dcmntNo;
    this.MLC.uhID = this.OPD.uhID;
    this.showImage()
    });


    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onsave(){
        const routerParams = this.routes.snapshot.params; 
          this._studentservice.mlcinsert(this.MLC)
            .subscribe(data => {
              this.upload()
              alert("Thanks....record Saved")
                this.dialogRef.close();
                window.location.reload();
             });
    }
    mlcpi(){
  let ipdNo = this.MLC.ipdNo;
  let uhID = this.MLC.uhID;
  this.Router.navigate(['pi/' + ipdNo,uhID]);
  this.dialogRef.close();
    }
    mlcinjury(){
      let ipdNo = this.MLC.ipdNo;
      let uhID = this.MLC.uhID;
      this.Router.navigate(['injury/' + ipdNo,uhID]);
      this.dialogRef.close();

    }
     onFilephoto(event:any) {
      const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        this.img1 = file
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        };
      }

    }
    onUploadphoto(){
      // const filedata = new FormData();
      // filedata.append('image',this.imageSrc,this.selectedFile.name);
      // console.log(File);
      // this.https.post('https://localhost:4200/api/values',filedata)
      // .subscribe(res=>{
      // });

    }
  selectedFile(arg0: string, selectedFile: any, name: any) {
    throw new Error('Method not implemented.');
  }
    onFileChange(event:any) {
      const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        this.img2 = file
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageSrc1 = reader.result as string;
        };
      }
    }
    onFileChange1(event1:any) {
      const reader = new FileReader();
      if(event1.target.files && event1.target.files.length) {
        const [file] = event1.target.files;
        this.img3 = file
        reader.readAsDataURL(file);
        reader.onload = () => {
   
          this.imageSrc2 = reader.result as string;
       
          // this.myForm.patchValue({
          //   fileSource: reader.result
          // });
     
        };
      }
    }

    upload(){
      if(this.img1 != '')
        {
          let formData = new FormData();
          formData.append('file', this.img1, this.img1.name);
          formData.append('saveName','photo-' + this.OPD.uhID);
          this._studentservice.uploadFile(formData).subscribe(data => {
           });
        }
        if(this.img2 != '')
        {
          let formData = new FormData();
          formData.append('file', this.img2, this.img2.name);
          formData.append('saveName','mlc-' + this.OPD.uhID + this.OPD.dcmntNo + "@1");
          this._studentservice.uploadFile(formData).subscribe(data => {
           });
        }
        if(this.img3 != '')
        {
          let formData = new FormData();
          formData.append('file', this.img3, this.img3.name);
          formData.append('saveName','mlc-' + this.OPD.uhID + this.OPD.dcmntNo + "@2");
          this._studentservice.uploadFile(formData).subscribe(data => {
           });
        }
        else {
          alert("Image 3 greater than 5mb")
        }
    }

    showImage(){
      this.imageSrc = "http://silversoft.softmansystem.com/Hospital/upload/photo-" + this.OPD.uhID + ".jpg"
      this.imageSrc1 = "http://silversoft.softmansystem.com/Hospital/upload/mlc-" + this.OPD.uhID + this.OPD.dcmntNo + "@1" + ".jpg"
      this.imageSrc2 = "http://silversoft.softmansystem.com/Hospital/upload/mlc-" + this.OPD.uhID + this.OPD.dcmntNo + "@2" + ".jpg"
    }    

  }
  