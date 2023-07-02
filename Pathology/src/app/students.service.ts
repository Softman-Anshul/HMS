import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'; 
import {login1, Test, testmasterd} from './students';
import {Students} from './students';
import {consulant } from './students';
import {department } from './students';
import {group} from './students';
import {testmaster } from './students';
import {company} from './students';
import {Labname} from './students';
import {Cityname} from './students';
import{testreport} from './students';
import { City } from './students';
import { paymode } from './students';
import {Wordname} from './students';
import {userpermission} from './students';
import * as crypto from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  //for login   
  cdn = "http://pinkpath.softmansystem.com"
// cdn = "http://softmanpinkpath.000webhostapp.com" 
//cdn = "http://localhost"
//cdn = "http://192.168.29.196"

getCompany()
  {
    return this.http.get<company[]> (this.cdn + '/Pathology/Company.php');
  }
  updateCompany(company:any)
  {
    return this.http.post(this.cdn + '/Pathology/Company_update.php',company,{responseType: 'text'});
  }
  updateKey(company:any)
  {
    return this.http.post(this.cdn + '/Pathology/Key_update.php',company,{responseType: 'text'});
  }
gettablelogin(uid:string,pass:string)
  {
   return this.http.get<JSON> (this.cdn + '/Pathology/login.php?uid=' + uid + '&pass=' + pass);
  }
  
  //userpermission
  getuserpermission(uname:string)
  {
   return this.http.get<JSON> (this.cdn + '/Pathology/userpermission.php?uname=' + uname );
  }
  userpermission()
  {
   return this.http.get<userpermission[]> (this.cdn + '/Pathology/PermissionList.php');
  }
  saveuserpermission(userpermission:userpermission[],uname:string)
  {
    return this.http.post(this.cdn + '/Pathology/Permission_Save.php',{'uname':uname,'permission':userpermission},{responseType: 'text'});
  }
  userpermissionForUser(uname:string)
  {
   return this.http.get<userpermission[]> (this.cdn + '/Pathology/PermissionList_ByName.php?uname='+uname);
  }

//student
gettable(vrdt1:string)
  {
   return this.http.get<Students[]> (this.cdn + '/Pathology/list.php?vrdt1=' + vrdt1);
  }
  gettablebyid(id:string)
  {
   return this.http.get<Students[]> (this.cdn + '/Pathology/GetTesti_info_byid.php?id=' + id);
  }
  gettablevaluebyid(vchrNo:number,vchrDate:string)
  {
   return this.http.get<any> (this.cdn + '/Pathology/GetValue_byid.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  gettablesearch(search:string,dt1:string,dt2:string,choice:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Pathology/listsearch.php?search=' + search + '&Fromdt=' + dt1 + '&Todt=' + dt2 + '&choice=' + choice);
   }
   getdirectsearch(search:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Pathology/listsearchdirect.php?search=' + search);
    }
  deletebooking(vchrNo:string,vchrDate:string)
  {
    return this.http.get<group[]> (this.cdn + '/Pathology/delete.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  deletereprot(vchrNo:string,vchrDate:string)
  {
    return this.http.get<group[]> (this.cdn + '/Pathology/delete_report.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }

  //consultant
  gettableconsultant()
  {
   return this.http.get<consulant[]> (this.cdn + '/Pathology/consultant_list.php');
  }
  gettableconsultantdata()
  {
   return this.http.get<Students[]> (this.cdn + '/Pathology/Consultant_list_from_Data.php');
  }
  createstudent(student:Students)
  {
    return this.http.post(this.cdn + '/Pathology/Consultant_insert.php',student);
  }
  deleteconsultant(id:string)
  {
    return this.http.get<consulant[]> (this.cdn + '/Pathology/consultant_delete.php?id=' + id);
  }
  updateconsultant(student:Students)
  {
    return this.http.post(this.cdn + '/Pathology/Consultant_update.php',student);
  }
  //department
  gettabledepart()
  {
   return this.http.get<department[]> (this.cdn + '/Pathology/Lab_Department_list.php');
  }
  createdepart(dep:any)
  {
      return this.http.post(this.cdn + '/Pathology/Lab_Department_insert.php',dep,{responseType: 'text'});
  }
  deletedepart(id:string)
  {
    return this.http.get<department[]> (this.cdn + '/Pathology/Lab_ Department_delete.php?id=' + id);
  }
  getdepartbyid(id:any)
  {
    return this.http.get(this.cdn + '/Pathology/Getdepartmentbyid.php?id=' + id);
  }
  updatedepartment(student:Students)
  {
    return this.http.post (this.cdn + '/Pathology/Department_update.php',student,{responseType: 'text'});
  }
//paymode 
gettablepaymode()
{
 return this.http.get<paymode[]> (this.cdn + '/Pathology/Paymode_list.php');
}
  //group 
  gettablegroup()
  {
   return this.http.get<group[]> (this.cdn + '/Pathology/Group_list.php');
  }
  creategroup(student:group)
  {
      return this.http.post(this.cdn + '/Pathology/Group_insert.php',student,{responseType: 'text'});
  }
  deletegroup(id:string)
  {
    return this.http.get<group[]>(this.cdn + '/Pathology/Group_delete.php?id=' + id);
  }
  getdegroupbyid(id:any)
  {
    return this.http.get<group[]>(this.cdn + '/Pathology/Getgroupbyid.php?id=' + id);
  }
  updategroup(student:group)
  {
    return this.http.post(this.cdn + '/Pathology/Group_update.php',student);
  }

  //testMaster
  createtestmasterh(testmaster:testmaster)
  {
      return this.http.post(this.cdn + '/Pathology/Testmaster_insert.php',testmaster,{responseType: 'text'});
  }
  createtestmasterd(student:testmaster)
  {
      return this.http.post(this.cdn + '/Pathology/Testmasterdetails_insert.php',student,{responseType: 'text'});
  }
  getbygroup(id:string)
  {
    return this.http.get<group[]> (this.cdn + '/Pathology/GetTestmaster_detail.php?id=' + id);
  }
  getconsultantbyid(id:any)
  {
    return this.http.get(this.cdn + '/Pathology/Getconsultantbyid.php?id=' + id);
  }
  //New User
  gettableUser()
  {
   return this.http.get<login1[]> (this.cdn + '/Pathology/Nuser_list.php');
  }
  getuserbyid(id:any)
  {
    return this.http.get(this.cdn + '/Pathology/GetUserbyid.php?id=' + id);
  }
  createNuser(student:login1)
  {
      return this.http.post (this.cdn + '/Pathology/Nuser_insert.php',student,{responseType: 'text'});
  }
  deleteNuser(id:string)
  {
    return this.http.get<login1[]> (this.cdn + '/Pathology/Nuser_delete.php?id=' + id);
  }
  updateNuser(student:Students)
  {
    return this.http.post (this.cdn + '/Pathology/Nuser_update.php',student,{responseType: 'text'});
  }
  //testbooking
  createbookingh(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Testbooking_insert.php',student,{responseType: 'text'});
  }
  createbookingd(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Testbookingdetails_insert.php',student,{responseType: 'text'});
  }
  gettablelabname()
  {
   return this.http.get<Labname[]> (this.cdn + '/Pathology/Labname_list.php');
  }
  gettablecityname()
  {
   return this.http.get<Cityname[]> (this.cdn + '/Pathology/Cityname_list.php');
  }
  gettableaddress()
  {
   return this.http.get<Students[]> (this.cdn + '/Pathology/Address_list_from_Data.php');
  }
  gettabletestname()
  {
   return this.http.get<testmaster[]> (this.cdn + '/Pathology/Testmaster_list.php');
  }
  getbookingheading(vchrNo:string,vchrDate:string)
  {
   return this.http.get<testmaster[]> (this.cdn + '/Pathology/GetTestbookingheading.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  getbookingdetails(vchrNo:string,vchrDate:string)
  {
   return this.http.get<Test[]> (this.cdn + '/Pathology/GetTestbookingdetails.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  gettabletestnamed(id:string)
  {
   return this.http.get<testmasterd[]> (this.cdn + '/Pathology/Testsubmaster_list.php?id=' + id);
  }
  TestMaster(testmaster:any)
  {
      return this.http.post(this.cdn + '/Pathology/Testmaster_insert.php',testmaster,{responseType: 'text'});
  }

  TestsubMaster(testreport:any)
  {
      return this.http.post(this.cdn + '/Pathology/Testmasterdetails_insert.php',testreport,{responseType: 'text'});
  }
  TestprofileMaster(testreport:any)
  {
      return this.http.post(this.cdn + '/Pathology/TestProfiledetails_insert.php',testreport,{responseType: 'text'});
  }
  gettableWord()
  {
   return this.http.get<Wordname[]> (this.cdn + '/Pathology/Wordname_list.php');
  }
  getmaxvchrno()
  {
   return this.http.get<number> (this.cdn + '/Pathology/TestMaxVchrNo.php');
  }
  getmaxuhid()
  {
   return this.http.get<number> (this.cdn + '/Pathology/TestMaxuhid.php');
  }
  getmaxtodayssno(vchrDate:any)
  {
   return this.http.get<number> (this.cdn + '/Pathology/Testtodaysno.php?vchrDate=' + vchrDate);
  }
  getmaxtestid()
  {
   return this.http.get<number> (this.cdn + '/Pathology/TestMaxtestid.php');
  }
  gettestnamebygname(group:any)
  {
    return this.http.get<group>(this.cdn + '/Pathology/GetTestNamebygroup.php?id=' + group);
  }
  getuhidsearch(search:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Pathology/uhidsearch.php?search=' + search);
   }
  gettestname()
  {
    return this.http.get<group>(this.cdn + '/Pathology/GetTestName.php');
  }
  testratechange(testname:any)
  {
    return this.http.post(this.cdn + '/Pathology/TestRateupdate.php',testname,{responseType: 'text'});
  }
  gettestbyname(item:string)
  {
    return this.http.get<group>(this.cdn + '/Pathology/GetTestNamesearch.php?id=' + item);
  }
  //reporting
  gettabledaycollection(vrdt1:string,vrdt2:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollection.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
   }
   gettabledaysummary(vrdt1:string,vrdt2:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daysummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
    }
    gettablemonthsummary(vrdt1:string,vrdt2:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Pathology/Report_monthsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
  gettabledaycollectiondoctor(vrdt1:string,vrdt2:string,doctor:string)
  {
    return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollectiondoctor.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&doctor=' + doctor );
   }
   gettabledaycollectionuser(vrdt1:string,vrdt2:string,user:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollectionuser.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&user=' + user );
    }
   gettabledaycollectioncity(vrdt1:string,vrdt2:string,city:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollectioncity.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&city=' + city );
    }
    gettabledaycollectionlab(vrdt1:string,vrdt2:string,Outsource:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollectionOutsource.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&Outsource=' + Outsource );
     }
    gettabledaycollectionpaymode(vrdt1:string,vrdt2:string,paymode:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Pathology/Report_daycollectionpaymode.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2 + '&paymode=' + paymode );
     }
 
   gettabledoctorsummary(vrdt1:string,vrdt2:string)
   {
     return this.http.get<Students[]> (this.cdn + '/Pathology/Report_doctorsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
    }
    gettableareasummary(vrdt1:string,vrdt2:string)
    {
      return this.http.get<Students[]> (this.cdn + '/Pathology/Report_areasummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
     }
     gettablelabsummary(vrdt1:string,vrdt2:string)
     {
       return this.http.get<Students[]> (this.cdn + '/Pathology/Report_labsummary.php?&vrdt1=' + vrdt1 + '&vrdt2=' + vrdt2);
      }
     gettablecitydata()
     {
      return this.http.get<Students[]> (this.cdn + '/Pathology/City_list_from_Data.php');
     }
     gettableunamedata()
     {
      return this.http.get<Students[]> (this.cdn + '/Pathology/User_list_from_Data.php');
     }
  //refund
  Saverefund(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Refund_insert.php',student,{responseType: 'text'});
  }
  Saverpaymode(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Paymode_insert.php',student,{responseType: 'text'});
  }
  Savedoctor(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Doctor_Change.php',student,{responseType: 'text'});
  }
  Saveotherlab(student:Students)
  {
      return this.http.post(this.cdn + '/Pathology/Otherlab_change.php',student,{responseType: 'text'});
  }
  //result
  getresulttable(vchrNo:number,vchrDate:string)
  { 
   return this.http.get<testreport[]> (this.cdn + '/Pathology/Test_Resultlist.php?vchrno=' + vchrNo + '&chrgsDate=' + vchrDate);
  }
  getTestdetails(vchrNo:number,vchrDate:string)
  { 
   return this.http.get<Test[]> (this.cdn + '/Pathology/GetTestbookingdetails.php?vchrNo=' + vchrNo + '&vchrDate=' + vchrDate);
  }
  savereport(Test:any)
   {
       return this.http.post (this.cdn + '/Pathology/Testreport_save.php',Test,{responseType: 'text'});
   }
   ///City 
   gettableCity()
   {
    return this.http.get<City[]> (this.cdn + '/Pathology/City_list.php');
   }
   createCity(city:City)
   {
       return this.http.post(this.cdn + '/Pathology/City_insert.php',city);
   }
   deleteCity(id:string)
   {
     return this.http.get<City[]> (this.cdn + '/Pathology/City_delete.php?id=' + id);
   }
   getcitybyid(id:any)
   {
     return this.http.get<City[]>(this.cdn + '/Pathology/GetCitybyid.php?id=' + id);
   }
   updateCity(city:any)
   {
   return this.http.post(this.cdn + '/Pathology/City_update.php',city);
    // return this.http.get<City[]>(this.cdn + '/Pathology/City_update.php');

   }
   getlabtestword()
   {
    return this.http.get<any> (this.cdn + '/Pathology/Getlabtestword.php');
   }
 ///OSLAB
 createlab(city:any)
 {
     return this.http.post (this.cdn + '/Pathology/OSLab_insert.php',city,{responseType: 'text'});
 }
 deletelab(id:string)
 {
   return this.http.get<City[]> (this.cdn + '/Pathology/OSLab_delete.php?id=' + id);
 }
 getlabbyid(id:any)
 {
   return this.http.get<City[]>(this.cdn + '/Pathology/GetOSLabbyid.php?id=' + id);
 }
 updatelab(labnam:any)
 {
   return this.http.post (this.cdn + '/Pathology/OSLab_update.php',labnam,{responseType: 'text'});
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
  
  isMob() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
    return check;
  }

  deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


Decrypt(encrypted_json_string: string){

  var passphrase = "softman5041"
  var obj_json = JSON.parse(encrypted_json_string);

  var encrypted = obj_json.ciphertext;
  var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
  var iv = CryptoJS.enc.Hex.parse(obj_json.iv);   

  var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999});

      
  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv});

  return decrypted.toString(CryptoJS.enc.Utf8);
}

}

