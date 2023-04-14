import { Component, Input, OnInit } from '@angular/core';
import {OPD, Students } from '../../students';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-ipd-tool-tip',
  templateUrl: './ipd-tool-tip.component.html',
  styleUrls: ['./ipd-tool-tip.component.css']
})
export class IpdToolTipComponent implements OnInit {

  @Input() x = '';
  @Input() y = '';
  OPD : Students[] = [];
  @Input() hoverDcmntNo = '';
  @Input() hoverUhID = '';
  
  totalBalAmount = 0;
  totalBillAmount = 0;
  

  constructor(private _studentservice:StudentsService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this._studentservice.gettestduelistsum(this.hoverDcmntNo,this.hoverUhID)
      .subscribe((data:any) => {
        // var audio = new Audio('http://silversoft.softmansystem.com/sound/soundin.mp3');
        //             audio.play();
        this.OPD = data
        if(this.OPD == null || this.OPD.length <= 0){
          let tooltip = document.getElementById("tooltip");
          if(tooltip != null){
            tooltip.style.display = 'none';
          }
        } else {
          let tooltip = document.getElementById("tooltip");
          if(tooltip != null){
            tooltip.style.display = 'block';
          }
          this.totalBalAmount = 0;
          this.totalBillAmount = 0;
          for(let i=0;i<this.OPD.length;i++){
                this.totalBillAmount +=  parseInt(this.OPD[i].billamt.toString());
                this.totalBalAmount +=  parseInt(this.OPD[i].balamt.toString());
          } 
        }
      
   });

}

}
