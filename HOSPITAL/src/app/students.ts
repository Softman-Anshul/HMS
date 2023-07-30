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
     "website":string;
     "years ":string;
     "front":ImageData;
     "logo":ImageData;
     "profle":string;
}
export class login1 {
    "stuserid":string;
    "stpassword":string;
    "stusername":string;
    "department":string;
    "UID":string;
}
export class Siftmaster {
    shift_id=0;
    shift_nam="";
    fromtime="";
    totime="";
    
}
export class MEDICALCERT {
    recno=0;
    uhID=0;
    issuedt="";
    fromdt="";
    todt="";
    dutyfrom="";
    dignos="";
    fitness="";
    uname="";
    years="";
    
}
export class disheading {
    "one":string;
    "two":string;
    "three":string;
    "four":string;
    "five":string;
    "six":string;
    "seven":string;
    "eight":string;
    "nine":string;
    "ten":string;

}
export class discardtemp {
    tempno =0;
    tempname="";
    "one":string;
    "two":string;
    "three":string;
    "four":string;
    "five":string;
    "six":string;
    "seven":string;
    "eight":string;
    "nine":string;
    "ten":string;
}
export class discard {
    cardno =0;
    carddate="";
    ipdno=0;
    uhid=0;
    "one":string;
    "two":string;
    "three":string;
    "four":string;
    "five":string;
    "six":string;
    "seven":string;
    "eight":string;
    "nine":string;
    "ten":string;
    uname="";
    Years="";
    opdrationdt="";

}
export class City {
    cityid="";
    citynam="";
    citytop=0;
}
export class IPDPAYMENT {
    recno =0;
	rectime ="";
	uhID =0;
	ipdNo =0;
	ipdDate ="";
	advanceReceived =0;
	Refundpayment =0;
	paymode ="";
	narration ="";
	uname ="";
	Years ="";
	cantime ="";
	canuser ="";
	refuser ="";
	reftime ="";
	reason ="";
}
export class billheading{
    vchrNo=0;
    vchrDate="";
    dcmntNo=0;
    uhID=0;
    roomno="";
    bedno="";
    discountAmt=0;
    grandTotal=0;
    dcmntType="Run";
    Statusdate="";
    distime="";
    Status="";
    paydue=0;
    adv=0;
    uname="";
    Years="";
    foc=0;
    satelment=0;
    disp=0;
    set=0;
    tests: billdetails[]=[];
    bills:IPDPAYMENT[]=[] ;  

}
export class billdetails{
    itmName="";
    itmChrgs=0;
    itmQty=0;
    disp=0;
    itmDiscntPrsnt=0;
    totalAmt=0;
    roomno=0;
    bedno=0;
    Remark="";
    vchrNo=0;
}
export class MLC{
    mlcno=0;
    mlcdt="";
    uhID=0;
    ipdNo=0;
    MOI="";
    THANA="";
    PBRBY="";
    relation="";
    PLACEACC="";
    NOI="";
    REM="";
    dep="";
    uname="";
    Years="";
    bradd="";
    brcity="";
    nature="";
    dttimeac="";
    diagnosis="";
    treatment="";
    surgery="";
    photo1="";
    photo2="";

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
    dcmntType="";
    uhID=0;
    Reporttype="";
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
    "department":string;
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
    duerec="N";
    tests: Test[]=[];
    labid=0;
    condition="";
    report: testreport[]=[];
}
export class Test {
itmName = "";
itmChrgs=0;
itmQty=1;
itmDiscntPrsnt=0;
totalAmt=0;
discntAmt=0;
chtype="";
Years="";
uname="";
sno = 0;
labto=0;
}
export class Wordname {
    Wordcode="";
    Wordname="";
    }
export class roomshift {
    ipdNo=0;
    uhID=0;
    roomNo=0;
    bedno=0;
    startDate="";
    endDate="";
    rCat="";
    remark="";
    
}
    
export class Ward {
    roomNo=0;
	roomChrgs=0;
	category ="";
	subCategory ="";
	Floor ="";
	Bedno =0;
    ipdno=0;
    uhid=0;
    cdt="";
    uname="";
    Years="";
    bed="";
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
    "dctID":string;
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
    "opdcharges":number;
    "Emergency":number;
    "validday":number;
    "Parcha":string;
}
export class department {
    "caseID":any;
    "caseType":string;
    "dprtmnt":string;
}
export class group {
    "payid":any;
    "paymode":string;
}

export class OPD {
    sno=0;
    dcmntType="";
    dcmntNo=0;
    uhID=0;
    pntName="";
    pntGrdn="";
    pntMobile="";
    pntAdrs1="";
    PntType="";
    pntCity="";
    pntSex="";
    pntAgeYrs="";
    agey="";
    rfrdBy="";
    amt=0;
    srvcTax=0;
    opdDate="";
    opdTime="";
    ampm="Morning";
    dctrPrscrptn="NA";
    caseType="";
    dctrVisited="";
    isOldPnt="";
    discount=0;
    expiryDate="";
    Dignosis="";
    refdiscount="";
    nature="";
    dismode="";
    Years="";
    uname="";
    dismodeby="";
    mark="";
    operative="";
    wt="";
    wtkg="Kg";
    bp="";
    temp="";
    markdt="";
    parcha="";
    photo="";
    pntn="";
    pntg="";
    paymode="";
    pntcast="";
    narration="";
    refund=0;
    aadhar="";
    panno="";
    canuser="";
    cantime="";
    refuser="";
    reftime="";
    disp=0;
    fixed=0;
    due=0;
    payment="Y";
    email="";
    maritalstatus="";
    occupation="";
    BloodGroup="";
    opdno=0;
    cond="";
    pulse="";
    resp="";
    spo2="";
    rbs="";
    corrid="";
    corrtime="";
    corrdate="";
    birth="";
    surgical="";
    cardno=0;
    cardrelation="";
    cardissuedt="";
    cardexpdt="";

    
    category: Ward[]=[];
    roomNo: Ward[]=[];
    Bedno:Ward[]=[];
    satelment:billheading[]=[];
    foc:billheading[]=[];
    paydue:billheading[]=[];
    grandTotal:billheading[]=[];
    Status:billheading[]=[];
    Statusdate:billheading[]=[];
    distime:billheading[]=[];
    vchrNo:billheading[]=[];
}
export class testmasterm {
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

export class testmaster {
    chrgsGrp="";
    chrgsName="";
    chrgAmt=0;
    chrgsCat="Both";
    sNo="";
    type="";
    Servicetax="N";
    ipdchargs=0;
    Iexp="I";
    testcode="0";
}
export class testmasterd {
    testid="";
    TestsubName="";
    Testscode="";
    SubUnit="";
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
    subgroup="";

}
export class testname{
    "Testcode":string;
    "testgroup":string;    
    "TestName":string;
    "Price":string;
}
export class newuser {
    "uid":number;
    "userid":string;
    "pwd":string;
    "username":string;
    "department":string;
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
    editorICount = 0;
    editorCCount = 0;
    total= 0;
    isDeleted=false;
    isNormal=true;
}
export class userpermission{
unam="";
mainmenu="";
submenu="";
inst="";
edt="";
del="";
instcheck = true;
edtcheck = true;
delcheck = true;
}
export class sidebar {
    sidebartext: string = "";
    url: string = "";
    icon: string = "";
}

export class testgroup {
    group_id: number = 0;
    sno: string = "";
    dep_name: string = "";
    group_name: string = "";
}

export class test {
    testid : number = 0;
    price : number = 0;
    test_code: string = "";
    test_name: string = "";
    value_type: string = "";
    test_group: string = "";
}
