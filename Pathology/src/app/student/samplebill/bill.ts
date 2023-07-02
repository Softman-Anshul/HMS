export class Bill {
    regNo = "";
    tests: Test[]=[];
    Totalamt = 0;
    Discount = 0;
    Netamt = 0;
    
} 

export class Test {
    TestName  = "";
    Qty = 0;
    Rate = 0;
    Amount = 0;
}