import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute, RouterPreloader } from '@angular/router';
import { Labname } from 'src/app/students';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-masteroutsidelab',
  templateUrl: './Master-outsidelab.component.html',
  styleUrls: ['./Master-outsidelab.component.css']
})
export class MasteroutsidelabComponent implements OnInit {

  constructor(private _studentservice: StudentsService,
    private Router: Router,) { }

  declare labname: Labname[];
  labnam = new Labname();
  uname = '';
  showMeedit: boolean = false
  showMesave: boolean = true
  Mobile = false;

  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    this.Mobile = this._studentservice.isMob()

    this._studentservice.gettablelabname()
      .subscribe((data: Labname[]) => {
        this.labname = data;
      });
  }
  onSubmit() {
    this._studentservice.createlab(this.labnam)
      .subscribe(data => {
        alert('Records Saved...Thanks');
        window.location.reload();
      });
  }
  onSubmitedit() {
    this._studentservice.updatelab(this.labnam)
      .subscribe(data => {
        alert('Records Modify...Thanks');
        window.location.reload();

      });
  }

  @needConfirmation()
  confirm(item: any) {
    this._studentservice.deletelab(item)
      .subscribe(data => {
        window.location.reload();
      })
  }

  deleter(item: any): void {
    defaultConfirmData.title = "Print Bill"
    defaultConfirmData.message = "Do you want to print bill?"
    this.confirm(item)
  }

  editer(item: any): void {
    this._studentservice.getlabbyid(item)
      .subscribe((data: any) => {
        this.labnam = data[0]

        //      this.addForm.patchValue(data);
      })
  }
  tooletageedit() {
    this.showMeedit = true
    this.showMesave = false
  }
}
