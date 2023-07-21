import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApicallsService } from '../apicalls.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  id = "";
  filedata = 'Loading...';

  constructor(private apicall: ApicallsService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null || id != undefined) {
        if (id != "") {

          this.id = id;
          this.apicall.getReport(id).subscribe((data: any) => {
            document.documentElement.innerHTML = data;
            html2canvas(document.documentElement).then(canvas => {
              var imgWidth = 208;
              var pageHeight = 295;
              var imgHeight = (canvas.height * imgWidth) / canvas.width;
              var heightLeft = imgHeight;
              var position = 0;

              const contentDataURL = canvas.toDataURL("image/png");
              let pdf = new jspdf.jsPDF();
              pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
              pdf.save("MYPdf.pdf"); // Generated PDF
            })
          })
        }
      } else {
        this.router.navigate(["/"]);
      }
    })
  }

}
