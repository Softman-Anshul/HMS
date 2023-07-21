import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http: HttpClient) { }

  cdn = "http://reports.softmansystem.com"


  getPdf(id: string){
    return this.http.get(this.cdn + "/Utils/" + id + "/report.html" , {responseType: "text"})
  }

  getReport(id : string){
    return this.http.get(this.cdn + "/Utils/getReport.php?id=" + id , {responseType: "text"})  
  }

  getmaxcertno() {
    return this.http.get<number>(this.cdn + '/Medical_MaxcertNo.php');
  }
}
