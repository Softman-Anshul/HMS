export class company {
    "Comp_nam":string;
    "Comp_add":string;
    "Comp_add1":string;
    "Comp_city":string;
    "Comp_Phon":string;
    "Comp_Count":string;
    "Comp_key":string;
     "Comp_Short_nam":string;
     "email":string;
     "years ":string;
     "front":ImageData;
     "logo":ImageData;
     "profle":string;
}
export class login1 {
    UID=0;
    stuserid="";
    stpassword="";
    stusername="";
    department="Pathology";
}
export class City {
    cityid="";
    citynam="";
    citytop=0;
}
export class Students {
    //regNo = "";
    vchrNo = 0;
    vchrDate="";
    vchrTime= "";
    Sno="";
    discountAmt=0;
    grandTotal=0;
    dcmntNo=0;
    dcmntType="Direct";
    uhID=0;
    Reporttype="Pathology";
    prnyes="N";
    printdate="";
    Years="";
    uname="";
    balamt=0;
    ipdno=0;
    mark="";
    dismode="";
    dismodeby="";
    del="Run";
    "PntName":string;
    "Pntgname":string;
    "pntadd":string;
    "pntcity":string;
    "pntmobile":string;
    "pntage":string;
    "pntsex":string;
    pntyears="Years";
    "condoctor":string;
     refby="";
     billamt=0;
    "labto":string;
    markdt="";
    "pntn":string;
    "pntg":string;
    discountby="";
    doctype="Type 1";
    typeno=0;
    recamt=0;
    stat="Adult";
    "email":string;
    disper=0;
    paymode="CASH";
    "narration":string;
    labtype="";
    "pntyrs":string;
    disresion="";
    disname="";
    refund=0;
    printtime="";
    cantime="";
    sampletype="";
    disp=0;
    duerec=0;
    tests: Test[]=[];
    labid=0;
    report: testreport[]=[];
}
export class Test {
itmName = "";
itmChrgs=0;
itmQty=1;
itmDiscntPrsnt=0;
totalAmt=0;
discntAmt=0;
chtype="Pathology";
Years="";
uname="";
sno = 0;
labto=0;
}
export class Wordname {
    Wordcode="";
    Wordname="";
    }
    
export class Labname {
labid="";
labname="";
area="";
cboy="";
mobile="";
labtype="OutSide Lab";
}
export class Cityname {
    "cityid":string;
    "citynam":string;
    "citytop":string;
    }
    export class consulant {
        "dctID":any;
        "dctName":string;
        "dctDOB":string;
        "dctMobile":string;
        "dctEmail":string;
        "dctCity":string;
        "dctSplzn":string;
        "dctAdrs1":string;
        "dctAdrs2":string;
        "dctSex":string;
        "dctType":string;
        "digree":string;
        "roomno":string;
        "morning":string;
        "evening":string;
        "Night":string;
        "oncall":string;
        "digree1":string;
        "department":string;
        "presmessage":string;
        "epres":string;
        "digree2":string;
        "digree3":string;
        "mobileprint":string;
        opdcharges=0;
        Emergency=0;
        validday=0;
    }
export class department {
    "depid":any;
    "labtype":string;
    "depnam":string;
}
export class paymode {
    payid="";
    paymode="";
}

export class group {
    group_id="";
    dep_name="";
    group_name="PROFILE";
    sno=0;
}
export class testmaster {
    Testid="";
    testgroup="";
    TestName="";
    Testcode="";
    TestType="1";
    subgroup="No";
    unit="Unit";
    ReportDays=1;
    Price=0;
    Remarks="N";
    printseprate="No";
    tests: testmasterd[]=[];
}
export class testmasterd {
    testid="";
    TestsubName="";
    Testscode="";
    SubUnit="";
    male="";
    female="";
    normalvalue="";
    Remark="N";
    testorder=0;
    testmasterid=0;
    formula="";
    interpet="";
    comments="";
    Ipet="N";
    comt="N";
    Wordcode="";
    subgroup="";

}
export class testname{
    "Testcode":string;    
    "TestName":string;
    "Price":string;
}
export class testreport {
    itmName= "";
    vchrNo=0;
    chrgsDate="";
    testid=0;
    labid=0;

    testgroup="";
    testcode="";
    testname="";
    subgroup="";
    Remarks="";

    Testid =0;
    TestsubName="";
    subunit="";
    male="";
    female="";
    normalvalue="";
    Remark="";
    testorder=0;
    testmasterid=0;
    formula="";
    interpet="";
    comments="";
    Ipet="";
    comt="";
    Wordcode="";
   
    Heading="";
    sno=0;
    value="";
    RN=0;
    total=0;
}
export class userpermission{
unam="";
mainmenu="";
submenu="";
inst="";
edt="";
del="";

}
export class sidebar {
    sidebartext: string = "";
    url: string = "";
    icon: string = "";
}


