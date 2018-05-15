class Associate{
    associateId:any;
    firstName:string;
    lastName:string;
    basicSalary:number;     
    hra:number;
    ta:number;
    da:number;
    totalSalary:number;
    constructor(associatedId:number,firstName:string,lastName:string,basicSalary:number){
        this.associateId=associatedId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.basicSalary=basicSalary;
    }
    
    calculateTotalSalary():void{
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*7/100;
        this.da=this.basicSalary*6/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
    }
    toString():string{
        return this.associateId+" "+this.firstName+" "+this.lastName+" "+this.basicSalary+" "+this.hra+" "+this.da+" "+this.ta+" "+this.totalSalary
    }
}

var associatesList = new Array<Associate>(3);
associatesList[0]= new Associate(101,"Satish","Mahajan",15000);
associatesList[1]= new Associate(102,"Kumar","Raj",25000);
associatesList[2]= new Associate(103,"Rakesh","Patil",25000);
associatesList.forEach(associate => {
    associate.calculateTotalSalary();
    console.log(associate.toString())
})