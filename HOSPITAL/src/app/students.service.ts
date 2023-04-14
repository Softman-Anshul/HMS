import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'; 
import {billdetails, billheading, IPDPAYMENT, login1, Test, testmasterd, Ward} from './students';
import {Students} from './students';
import {consulant } from './students';
import {department } from './students';
import {group} from './students';
import {testmaster } from './students';
import {newuser} from './students';
import {company} from './students';
import {Labname} from './students';
import {Cityname} from './students';
import{testreport} from './students';
import { City } from './students';
import {Wordname} from './students';
import {OPD} from './students';
import {userpermission} from './students';
import {roomshift} from './students';
import {disheading} from './students';
import { ToWords } from 'to-words';
import { discardtemp } from './students';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {
 
constructor(private http: HttpClient) {}

  //for login   
  cdn = "http://silversoft.softmansystem.com"
// cdn = "http://softmanpinkpath.000webhostapp.com" 
//cdn = "http://localhost"
//cdn = "http://192.168.29.196"

getCompany()
  {
    return this.http.get<company[]> (this.cdn + '/Hospital/Company.php');
  }
  updateCompany(company:any)
  {
    return this.http.put (this.cdn + '/Hospital/Company_update.php',company,{responseType: 'text'});
  }
  updateKey(company:any)
  {
    return this.http.put (this.cdn + '/Hospital/Key_update.php',company,{responseType: 'text'});
  }
gettablelogin(uid:string,pass:string)
  {
   return this.http.get<login1[]> (this.cdn + '/Hospital/login.php?uid=' + uid + '&pass=' + pass  );
  }
  passwordchange(uid:string,pass:string)
  {
   return this.http.get<login1[]> (this.cdn + '/Hospital/ChangePassword.php?uid=' + uid + '&pass=' + pass  );
  }
  //userpermission
  getuserpermission(uname:string)
  {
   return this.http.get<JSON> (this.cdn + '/Hospital/userpermission.php?uname=' + uname );
  }
  userpermission()
  {
   return this.http.get<userpermission[]> (this.cdn + '/Hospital/PermissionList.php');
  }
  saveuserpermission(userpermission:userpermission[],uname:string)
  {
    return this.http.post(this.cdn + '/Hospital/Permission_Save.php',{'uname':uname,'permission':userpermission},{responseType: 'text'});
  }
  userpermissionForUser(uname:string)
  {
   return this.http.get<userpermission[]> (this.cdn + '/Hospital/PermissionList_ByName.php?uname='+uname);
  }
//OPD
getopdconsultant(depart:string)
  {
   return this.http.get<consulant[]> (this.cdn + '/Hospital/Consultantbydept.php?id='+depart);
  }
  getopdrconsultant()
  {
    return this.http.get<consulant[]> (this.cdn + '/Hospital/ConsultantR_list.php');
  }
getopd(vrdt1:any)
  {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/opd_list.php?vrdt1=' + vrdt1);
  }
  getipdadmit()
  {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/ipd_list.php');
  }
  getipdpaymentstatus()
  {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/ipd_paymentstatus.php');
  }
  printipdpaymentstatus()
  {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/ipd_paymentstatus_print.php');
  }
  ipdpaymentstatus(OPD:any)
  {
    return this.http.put(this.cdn + '/Hospital/ipd_paymentstatus_insert.php',OPD,{responseType: 'text'});
  }
  gettestduelistsum(dcmntNo:any,uhID:any)
  {
    return this.http.get<OPD[]> (this.cdn + '/Hospital/gettestduelistsum.php?dcmntNo=' + dcmntNo + '&uhID=' +  uhID);
  }
  getipddischarge(vrdt1:any)
  {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/ipd_list_discharge.php?vrdt1=' + vrdt1);
  }
  getdischargeheading()
  {
    return this.http.get<disheading[]> (this.cdn + '/Hospital/ipd_dischargeheading.php');
  }
  dischargeheading(dishaeding:any)
  {
      return this.http.put(this.cdn + '/Hospital/ipd_dischargeheading_insert.php',dishaeding,{responseType: 'text'});
  }
  opdrefund(OPD:OPD)
  {
      return this.http.put(this.cdn + '/Hospital/OpdRefund_insert.php',OPD,{responseType: 'text'});
  }
  opdpaymentmodechange(OPD:OPD)
  {
      return this.http.put(this.cdn + '/Hospital/Opdpaymentmode_change.php',OPD,{responseType: 'text'});
  }
  opddoctorchange(OPD:OPD)
  {
      return this.http.put(this.cdn + '/Hospital/Opddoctorchange_insert.php',OPD,{responseType: 'text'});
  }
  opdsearch(search:string,dt1:string,dt2:string,choice:string)
  {
    return this.http.get<OPD[]> (this.cdn + '/Hospital/opdsearch.php?search=' + search + '&Fromdt=' + dt1 + '&Todt=' + dt2 + '&choice=' + choice);
   }
   ipdsearch(search:string,choice:string)
   {
     return this.http.get<OPD[]> (this.cdn + '/Hospital/ipdsearch.php?search=' + search + '&choice=' + choice);
    }
    ipdsearch_discharge(search:string,dt1:string,dt2:string,choice:string)
    {
      return this.http.get<OPD[]> (this.cdn + '/Hospital/ipdsearch_discharge.php?search=' + search + '&dt1=' + dt1 + '&dt2=' + dt2 + '&choice=' + choice);
    }

   opdgetmaxvchrno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/opdMaxVchrNo.php');
   }
   opdgetmaxfileno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/ipdMaxfileNo.php');
   }
   paymentrecno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/ipdMaxpayrecno.php');
   }
   opdgetmaxuhid()
   {
    return this.http.get<number> (this.cdn + '/Hospital/opdMaxuhid.php');
   }
   opdgetmaxsno(doctor:string,opddate:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/opdMaxSNo.php?doctor=' + doctor + '&opddate=' + opddate );
   }
   opd_insert(OPD1:any)
   {
       return this.http.post(this.cdn + '/Hospital/pntinfo_insert.php',OPD1,{responseType: 'text'});
   }
   ipd_insert(OPD1:any)
   {
       return this.http.post(this.cdn + '/Hospital/pntinfo_ipd_insert.php',OPD1,{responseType: 'text'});
   }
   ipd_update(OPD1:any)
   {
       return this.http.post(this.cdn + '/Hospital/pntinfo_ipd_update.php',OPD1,{responseType: 'text'});
   }
   updateroominfo(ward1:any)
   {
       return this.http.post(this.cdn + '/Hospital/wardupdate.php',ward1,{responseType: 'text'});
   }
   Test_due_recevied(student:any)
   {
       return this.http.post(this.cdn + '/Hospital/Test_due_recevied.php',student,{responseType: 'text'});
   }
   ipd_dueupdate(Deposit:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_due_update.php',Deposit,{responseType: 'text'});
   }
   ipd_payment(Deposit:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_payment.php',Deposit,{responseType: 'text'});
   }
   opd_update(OPD1:any)
   {
       return this.http.post(this.cdn + '/Hospital/pntinfo_update.php',OPD1,{responseType: 'text'});
   }
   deleteopd(dcmntNo:string,opdDate:string)
   {
     return this.http.delete<group[]> (this.cdn + '/Hospital/pntinfo_delete.php?dcmntNo=' + dcmntNo + '&opdDate=' + opdDate);
   }
   getopdreg(id:any,opdDate:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getopdreg.php?id=' + id + '&opdDate=' + opdDate);
   }
   getipdreg(id:any,opdDate:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getipdreg.php?id=' + id + '&opdDate=' + opdDate);
   }
   Testgetopdreg(id:any,opdDate:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/TestGetopdreg.php?id=' + id + '&opdDate=' + opdDate);
   }
   getopdregRecp(id:any,opdDate:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getopdregrec.php?id=' + id + '&opdDate=' + opdDate);
   }
   getipdregRecp(id:any,uhid:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getipdregrec.php?id=' + id + '&uhid=' + uhid);
   }
   getipdregRecppayadmit(id:any,dt:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getipdregrecpay.php?id=' + id + '&dt=' + dt);
   }
   getwardbyipdno(ipdno:any,uhid:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/Getwardbyipdno.php?ipdno=' + ipdno + '&uhid=' + uhid);
   }
   ipdpaymentmodechange(recno:any,ipdDate:any,paymode:any)
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/ipd_paymentmodechange.php?recno=' + recno + '&ipdDate=' + ipdDate + '&paymode=' + paymode);
   }
   ipdgetmaxvchrno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/ipdMaxvchrno.php');
   }
   ipdgetmaxbillno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/ipdMaxbillno.php');
   }
   createbilling(heads:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_bill_insert.php',heads,{responseType: 'text'});
   }
   createbillingdetails(heads:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_billdetails_insert.php',heads,{responseType: 'text'});
   }
   dischargebilling(heads:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_bill_discharge.php',heads,{responseType: 'text'});
   }
   dischargebillingdetails(heads:any)
   {
       return this.http.post(this.cdn + '/Hospital/ipd_billdetails_discharge.php',heads,{responseType: 'text'});
   }
   getipdbilldetails(dcmntNo:any,uhID:any)
   {
    return this.http.get<Students[]> (this.cdn + '/Hospital/ipd_billdetails_list.php?dcmntNo=' + dcmntNo + '&uhID=' + uhID );
   }
   ipddoctorchange(OPD:OPD)
   {
       return this.http.put(this.cdn + '/Hospital/ipddoctorchange_insert.php',OPD,{responseType: 'text'});
   }
   //mlc
   mlcgetmaxmlcno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/mlc_getmaxmlcno.php');
   }
   mlcinsert(MLC:any)
   {
    return this.http.post(this.cdn + '/Hospital/mlc_insert.php',MLC,{responseType: 'text'});
   }
   mlcload(ipdNo:any,uhID:any)
   {
    return this.http.get<Students[]> (this.cdn + '/Hospital/mlc_dataload.php?ipdNo=' + ipdNo + '&uhID=' + uhID );
   }
   dischargecardload(ipdno:any,uhid:any)
   {
    return this.http.get<Students[]> (this.cdn + '/Hospital/dischargecard_dataload.php?ipdno=' + ipdno + '&uhid=' + uhid );
   }
   dischargecardinsert(discard:any)
   {
    return this.http.post(this.cdn + '/Hospital/dischargecard_insert.php',discard,{responseType: 'text'});
   }
   maxdiscardno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/dischargecard_getmaxmlcno.php');
   }
   maxdistempno()
   {
    return this.http.get<OPD> (this.cdn + '/Hospital/dischargetemplate_getmaxtempno.php');
   }
   dischargetempload(tempname:any)
   {

    return this.http.get<discardtemp[]> (this.cdn + '/Hospital/dischargetemplate_list.php?tempname=' + tempname );
   }
   dischargetempinsert(discard:any)
   {
    return this.http.post(this.cdn + '/Hospital/dischargetemp_insert.php',discard,{responseType: 'text'});
   }
   getdischargetempheading()
   {
     return this.http.get<disheading[]> (this.cdn + '/Hospital/dischargetemp_tempname.php');
   }
//student
gettable(vrdt1:any)
  {
   return this.http.get<Students[]> (this.cdn + '/Hospital/Test_list.php?vrdt1=' + vrdt1);
  }
  gettablebyid(id:string)
  {
   return this.http.get<Students[]> (this.cdn + '/Hospital/GetTesti_info_byid.php?id=' + id);
  }
  gettablevaluebyid(vchrNo:number,vchrDate:string)
  {
//   return this.http.get<any> (this.cdn + '/Hospital/GetValue_byid.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  gettablesearch(search:string,dt1:string,dt2:string,choice:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Hospital/listsearch.php?search=' + search + '&Fromdt=' + dt1 + '&Todt=' + dt2 + '&choice=' + choice);
   }
  deletebooking(vchrNo:string,vchrDate:string)
  {
    return this.http.delete<group[]> (this.cdn + '/Hospital/delete.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  //consultant
  gettableconsultant()
  {
   return this.http.get<consulant[]> (this.cdn + '/Hospital/Consultant_list.php');
  }
  createstudent(student:Students)
  {
   
    return this.http.post(this.cdn + '/Hospital/Consultant_insert.php',student,{responseType: 'text'});
  }
  deleteconsultant(id:string)
  {
    return this.http.delete<consulant[]> (this.cdn + '/Hospital/Consultant_delete.php?id=' + id);
  }
  updateconsultant(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/Consultant_update.php',student,{responseType: 'text'});
  }
  //rconsultant
  gettablerconsultant()
  {
   return this.http.get<consulant[]> (this.cdn + '/Hospital/ConsultantR_list.php');
  }
  createrstudent(student:Students)
  {
      return this.http.post(this.cdn + '/Hospital/ConsultantR_insert.php',student,{responseType: 'text'});
  }
  deleterconsultant(id:string)
  {
    return this.http.delete<consulant[]> (this.cdn + '/Hospital/ConsultantR_delete.php?id=' + id);
  }
  updaterconsultant(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/ConsultantR_update.php',student,{responseType: 'text'});
  }
  //department
  gettabledepart()
  {
   return this.http.get<department[]> (this.cdn + '/Hospital/Department_list.php');
  }
  gettableward()
  {
   return this.http.get<Ward[]> (this.cdn + '/Hospital/ward_list.php');
  }
  gettablewardmaster()
  {
   return this.http.get<Ward[]> (this.cdn + '/Hospital/ward_listsum.php');
  }
  getbedlist(Ward:any)
  {
    return this.http.get<roomshift[]> (this.cdn + '/Hospital/Ward_bedlist.php?Ward=' + Ward);
  }
  checkroomno(roomNo:any)
  {
    return this.http.get<roomshift[]> (this.cdn + '/Hospital/Ward_checkroomno.php?roomNo=' + roomNo);
  }
  newbedinsert(Ward:any)
  {
    return this.http.post (this.cdn + '/Hospital/Ward_bedinsert.php',Ward,{responseType: 'text'});

  }
  deletebed(roomNo:any,Bedno:any)
  {
    return this.http.get<roomshift[]> (this.cdn + '/Hospital/Ward_bed_delete.php?roomNo=' + roomNo + '&Bedno=' + Bedno);
  }
  deleteWard(Ward:any)
  {
    return this.http.get<roomshift[]> (this.cdn + '/Hospital/Ward_delete.php?Ward=' + Ward);
  }
  getshifttable(dcmntNo:any,uhID:any)
  {
    return this.http.get<roomshift[]> (this.cdn + '/Hospital/GetWardhistory.php?dcmntNo=' + dcmntNo + '&uhID=' + uhID);
  }
  roomshifting(Ward1:any)
  {
    return this.http.post (this.cdn + '/Hospital/ipd_Roomshifting_update.php',Ward1,{responseType: 'text'});
  }
  getwardroom(category:string)
  {
    return this.http.delete<Ward[]> (this.cdn + '/Hospital/Ward_details.php?category=' + category);
  }
  createdepart(dep:any)
  {
      return this.http.post(this.cdn + '/Hospital/Department_insert.php',dep,{responseType: 'text'});
  }
  deletedepart(id:string)
  {
    return this.http.delete<department[]> (this.cdn + '/Hospital/Department_delete.php?id=' + id);
  }
  getdepartbyid(id:any)
  {
    return this.http.get(this.cdn + '/Hospital/Departmentbyid.php?id=' + id);
  }
  updatedepartment(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/Department_update.php',student,{responseType: 'text'});
  }

  //group = Payment
  gettablegroup()
  {
   return this.http.get<group[]> (this.cdn + '/Hospital/Paymode_list.php');
  }
  creategroup(student:group)
  {
      return this.http.post (this.cdn + '/Hospital/Paymode_insert.php',student,{responseType: 'text'});
  }
  deletegroup(id:string)
  {
    return this.http.delete<group[]> (this.cdn + '/Hospital/Paymode_delete.php?id=' + id);
  }
  getdegroupbyid(id:any)
  {
    return this.http.get(this.cdn + '/Hospital/Paymodebyid.php?id=' + id);
  }
  updategroup(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/Paymode_update.php',student,{responseType: 'text'});
  }

  //testMaster
  createtestmasterh(testmaster:testmaster)
  {
      return this.http.post(this.cdn + '/Hospital/Testmaster_insert.php',testmaster,{responseType: 'text'});
  }
  deleteTest(id:string)
  {
    return this.http.delete<group[]> (this.cdn + '/Hospital/Testmaster_delete.php?id=' + id);
  }
  getTestbyid(id:any)
  {
    return this.http.get(this.cdn + '/Hospital/Testbyid.php?id=' + id);
  }
  updateTest(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/Testmaster_update.php',student,{responseType: 'text'});
  }
  getbygroup(id:string)
  {
//    return this.http.get<group[]> (this.cdn + '/Hospital/GetTestmaster_detail.php?id=' + id);
  }
  getconsultantbyid(id:any)
  {
    return this.http.get(this.cdn + '/Hospital/Consultantbyid.php?id=' + id);
  }
  //New User
  gettableUser()
  {
   return this.http.get<login1[]> (this.cdn + '/Hospital/Nuser_list.php');
  }
  getuserbyid(id:any)
  {
    return this.http.get(this.cdn + '/Hospital/GetUserbyid.php?id=' + id);
  }
  createNuser(student:newuser)
  {
      return this.http.post (this.cdn + '/Hospital/Nuser_insert.php',student,{responseType: 'text'});
  }
  deleteNuser(id:string)
  {
    return this.http.delete<newuser[]> (this.cdn + '/Hospital/Nuser_delete.php?id=' + id);
  }
  updateNuser(student:Students)
  {
    return this.http.put (this.cdn + '/Hospital/Nuser_update.php',student,{responseType: 'text'});
  }
  //testbooking
  createbookingh(student:Students)
  {
      return this.http.post(this.cdn + '/Hospital/Testbooking_insert.php',student,{responseType: 'text'});
  }
  createbookingd(student:Students)
  {
      return this.http.post(this.cdn + '/Hospital/Testbookingdetails_insert.php',student,{responseType: 'text'});
  }
  gettablelabname()
  {
   return this.http.get<Labname[]> (this.cdn + '/Hospital/Labname_list.php');
  }
  topcity(city:any)
  {
    return this.http.get(this.cdn + '/Hospital/Top_city.php?id=' + city);

  }
  gettablecityname()
  {
   return this.http.get<Cityname[]> (this.cdn + '/Hospital/Cityname_list.php');
  }
  gettabletestname()
  {
   return this.http.get<testmaster[]> (this.cdn + '/Hospital/Testmaster_list.php');
  }
  gettabletesthead()
  {
   return this.http.get<testmaster[]> (this.cdn + '/Hospital/Testmaster_heads.php');
  }
  gettestsearchname(search:any)
  {
   return this.http.get<testmaster[]> (this.cdn + '/Hospital/Testmaster_list_bytestname.php?search=' + search);
  }
  getbookingheading(vchrNo:string,vchrDate:string)
  {
   return this.http.get<testmaster[]> (this.cdn + '/Hospital/GetTestbookingheading.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  getbookingdetails(vchrNo:string,vchrDate:string)
  {
   return this.http.get<Test[]> (this.cdn + '/Hospital/GetTestbookingdetails.php?vchrNo=' + vchrNo + '&chrgsDate=' + vchrDate);
  }
  getmaxvchrno()
  {
   return this.http.get<number> (this.cdn + '/Hospital/TestMaxVchrNo.php');
  }
  getmaxuhid()
  {
   return this.http.get<number> (this.cdn + '/Hospital/opdMaxuhid.php');
  }
  getmaxtodayssno(vchrDate:any)
  {
   return this.http.get<number> (this.cdn + '/Hospital/Testtodaysno.php?vchrDate=' + vchrDate);
  }
  getuhidsearch(search:any)
  {
    return this.http.get<OPD[]> (this.cdn + '/Hospital/uhidsearch.php?search=' + search);
   }
  gettestname()
  {
    return this.http.get<group>(this.cdn + '/Hospital/GetTestName.php');
  }
  testratechange(testname:any)
  {
    return this.http.put(this.cdn + '/Hospital/TestRateupdate.php',testname,{responseType: 'text'});
  }
  gettestbyname(item:string)
  {
    return this.http.get<group>(this.cdn + '/Hospital/GetTestNamesearch.php?id=' + item);
  }
  //medical certifcate
  getmaxcertno()
  {
   return this.http.get<number> (this.cdn + '/Hospital/Medical_MaxcertNo.php');
  }
  medicalcerinsert(cer1:any)
  {
    return this.http.put(this.cdn + '/Hospital/Medical_insert.php',cer1,{responseType: 'text'});
  }
  medicalcerdelete(recno:any,issuedt:any)
  {
    return this.http.delete<City[]> (this.cdn + '/Hospital/Medical_delete.php?&recno=' + recno + '&issuedt=' + issuedt);

  }
  getmedicalcer()
  {
   return this.http.get<City[]> (this.cdn + '/Hospital/Medical_list.php');
  }
  getmedicalcerbyrecno(recno:any,issuedt:any)
  {
    return this.http.get<Students[]> (this.cdn + '/Hospital/Medical_list_print.php?&recno=' + recno + '&issuedt=' + issuedt);
  }
  //refund
  Saverefund(student:Students)
  {
      return this.http.put(this.cdn + '/Hospital/Refund_insert.php',student,{responseType: 'text'});
  }
  Saverpaymode(student:Students)
  {
      return this.http.post(this.cdn + '/Hospital/TestPaymode_insert.php',student,{responseType: 'text'});
  }
  patientfullpayment(uhID:string)
{
  return this.http.get<Students[]> (this.cdn + '/Hospital/patientfullpayment.php?&uhID=' + uhID);
 }
  //  Mis reporting
misdailyacticity(vrdt1:string,vrdt2:string)
{
  return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-details.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
 }
 mispaymodeacticity(vrdt1:string,vrdt2:string,doc1:string)
{
  return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-paymode.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doc1=' + doc1);
 }
 missummaryacticity(vrdt1:string,vrdt2:string)
 {
   return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-summary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
  }
 misheadsacticity(vrdt1:string,vrdt2:string,doc1:string)
 {
   return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-Heads.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doc1=' + doc1);
  }
  misheadsdailyacticity(vrdt1:string,vrdt2:string,doc1:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-Headsdaily.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doc1=' + doc1);
   }
   misheadsmonthacticity(vrdt1:string,vrdt2:string,doc1:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Hospital/Report_Mis-DA-Headsmonthly.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doc1=' + doc1);
    }
    //  OPD reporting
gettableopddaycollection(vrdt1:string,vrdt2:string)
{
  return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollection.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
 }
 gettableopddaysummary(vrdt1:string,vrdt2:string)
 {
   return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daysummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
  }
  gettableopdmonthsummary(vrdt1:string,vrdt2:string)
  {
    return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_monthsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
   }
   gettableopddaycollectiondoctor(vrdt1:string,vrdt2:string,doctor:string)
   {
     return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollectiondoctor.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doctor=' + doctor );
    }
    gettableopddoctorsummary(vrdt1:string,vrdt2:string) 
    {
      return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_doctorsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
     gettableopddaycollectionrdoctor(vrdt1:string,vrdt2:string,doctor:string)
   {
     return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollectionrdoctor.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doctor=' + doctor );
    }
    gettableopdrdoctorsummary(vrdt1:string,vrdt2:string) 
    {
      return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_rdoctorsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
     gettableopddaycollectioncity(vrdt1:string,vrdt2:string,city:string)
     {
       return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollectioncity.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&city=' + city );
      }
       gettableopdareasummary(vrdt1:string,vrdt2:string)
    {
      return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_areasummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
     gettabledayopdcollectionuser(vrdt1:string,vrdt2:string,user:string)
     {
       return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollectionuser.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&user=' + user );
      }
      gettabledayopdcollectionpaymode(vrdt1:string,vrdt2:string,paymode:string)
      {
        return this.http.get<OPD[]> (this.cdn + '/Hospital/Report_opd_daycollectionpaymode.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&paymode=' + paymode );
       }
//  Test reporting
gettabledaycollection(vrdt1:string,vrdt2:string)
{
  return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollection.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
 }
 gettabledaysummary(vrdt1:string,vrdt2:string)
 {
   return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daysummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
  }
  gettablemonthsummary(vrdt1:string,vrdt2:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Hospital/Report_monthsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
   }
   gettabledaycollectiondoctor(vrdt1:string,vrdt2:string,doctor:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollectiondoctor.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doctor=' + doctor );
    }
    gettabledoctorsummary(vrdt1:string,vrdt2:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Hospital/Report_doctorsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
    }
    gettableareasummary(vrdt1:string,vrdt2:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Hospital/Report_areasummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
     gettabledaycollectioncity(vrdt1:string,vrdt2:string,city:string)
     {
       return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollectioncity.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&city=' + city );
      }
      gettabledaycollectionuser(vrdt1:string,vrdt2:string,user:string)
      {
        return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollectionuser.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&user=' + user );
       }
       gettabledaycollectionpaymode(vrdt1:string,vrdt2:string,paymode:string)
       {
         return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollectionpaymode.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&paymode=' + paymode );
        }
        gettabledaycollectionlab(vrdt1:string,vrdt2:string,Outsource:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Hospital/Report_daycollectionOutsource.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&Outsource=' + Outsource );
     }
     gettablelabsummary(vrdt1:string,vrdt2:string)
     {
       return this.http.get<Students[]> (this.cdn + '/Hospital/Report_labsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
      }
  //result
  getresulttable(vchrNo:number,vchrDate:string)
  { 
   return this.http.get<testreport[]> (this.cdn + '/Hospital/Test_Resultlist.php?vchrno=' + vchrNo + '&chrgsDate=' + vchrDate);
  }
  getTestdetails(vchrNo:number,vchrDate:string)
  { 
   return this.http.get<Test[]> (this.cdn + '/Hospital/GetTestbookingdetails.php?vchrNo=' + vchrNo + '&chrgsDate=' + vchrDate);
  }
  getipdpaymentdetails(dcmntNo:number,uhID:number)
  { 
   return this.http.get<IPDPAYMENT[]> (this.cdn + '/Hospital/Getipdpaymentdetails.php?dcmntNo=' + dcmntNo + '&uhID=' + uhID);
  }
  gettestduelist(dcmntNo:number,uhID:number)
  { 
   return this.http.get<IPDPAYMENT[]> (this.cdn + '/Hospital/GetTest_due_details.php?dcmntNo=' + dcmntNo + '&uhID=' + uhID);
  }
  getipdbillheadingdischarge(billno:any,yrs:any)
  { 
   return this.http.get<billheading[]> (this.cdn + '/Hospital/ipd_billheads_list_discharge.php?billno=' + billno + '&yrs=' + yrs);
  }
  getipdbilldetailsdischarge(billno:any,yrs:any)
  { 
   return this.http.get<billdetails[]> (this.cdn + '/Hospital/ipd_billdetails_list_discharge.php?billno=' + billno + '&yrs=' + yrs);
  }
  savereport(Test:any)
   {
       return this.http.post (this.cdn + '/Hospital/Testreport_save.php',Test,{responseType: 'text'});
   }
   //SHIFTMASTER
   gettableshift()
   {
    return this.http.get<City[]> (this.cdn + '/Hospital/shift_list.php');
   }

   ///City 
   gettableCity()
   {
    return this.http.get<City[]> (this.cdn + '/Hospital/City_list.php');
   }
   createCity(city:any)
   {
       return this.http.post (this.cdn + '/Hospital/City_insert.php',city,{responseType: 'text'});
   }
   deleteCity(id:string)
   {
     return this.http.delete<City[]> (this.cdn + '/Hospital/City_delete.php?id=' + id);
   }
   getcitybyid(id:any)
   {
     return this.http.get<City[]>(this.cdn + '/Hospital/Citybyid.php?id=' + id);
   }
   updateCity(city:any)
   {
     return this.http.put (this.cdn + '/Hospital/City_update.php',city,{responseType: 'text'});
   }
   getlabtestword()
   {
    return this.http.get<any> (this.cdn + '/Hospital/Getlabtestword.php');
   }
 ///OSLAB
 createlab(city:any)
 {
     return this.http.post (this.cdn + '/Hospital/OSLab_insert.php',city,{responseType: 'text'});
 }
 deletelab(id:string)
 {
   return this.http.delete<City[]> (this.cdn + '/Hospital/OSLab_delete.php?id=' + id);
 }
 getlabbyid(id:any)
 {
   return this.http.get<City[]>(this.cdn + '/Hospital/OSLabbyid.php?id=' + id);
 }
 updatelab(labnam:any)
 {
   return this.http.put (this.cdn + '/Hospital/OSLab_update.php',labnam,{responseType: 'text'});
 }

 uploadFile(req:any)
 {
   return this.http.post(this.cdn + '/Hospital/Upload_Image.php',req)
 }
  getUsername() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      if(cookie.split("=")[0].trim() == "uname"){
        return cookie.split("=")[1]
      }
    }
    return ""
  }
  getYears() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      if(cookie.split("=")[0].trim() == "Years"){
        return cookie.split("=")[1]
      }
    }
    return ""
  }
  
  isMob() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
    return check;
  }

  toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: { // can be used to override defaults for the selected locale
        name: 'Rupee',
        plural: 'Rupees',
        symbol: '₹',
        fractionalUnit: {
          name: 'Paisa',
          plural: 'Paise',
          symbol: '',
        },
      }
    }
  });

  numberToText(num:number){
      return this.toWords.convert(num);
  }

  }

