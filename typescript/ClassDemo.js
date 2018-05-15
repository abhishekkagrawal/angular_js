var Associate = /** @class */ (function () {
    function Associate(associatedId, firstName, lastName, basicSalary) {
        this.associateId = associatedId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.basicSalary = basicSalary;
    }
    Associate.prototype.calculateTotalSalary = function () {
        this.hra = this.basicSalary * 10 / 100;
        this.ta = this.basicSalary * 7 / 100;
        this.da = this.basicSalary * 6 / 100;
        this.totalSalary = this.basicSalary + this.hra + this.da + this.ta;
    };
    Associate.prototype.toString = function () {
        return this.associateId + " " + this.firstName + " " + this.lastName + " " + this.basicSalary + " " + this.hra + " " + this.da + " " + this.ta + " " + this.totalSalary;
    };
    return Associate;
}());
var associatesList = new Array(3);
associatesList[0] = new Associate(101, "Satish", "Mahajan", 15000);
associatesList[1] = new Associate(102, "Kumar", "Raj", 25000);
associatesList[2] = new Associate(103, "Rakesh", "Patil", 25000);
associatesList.forEach(function (associate) {
    associate.calculateTotalSalary();
    console.log(associate.toString());
});
