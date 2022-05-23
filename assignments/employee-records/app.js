var employees = []
//create an Employee constructor
function Employee (Name, JobTitle, Salary, Status) {
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = Status
    
}
//instantiate the Employee object
var printEmployeeForm1 = new Employee ("Jonathan", "student", "$15.00/hour", "Part-Time")
var printEmployeeForm2 = new Employee ("Alosha", "teacher", "$25.00/hour", "Contractor")
var printEmployeeForm3 = new Employee ("Adriana", "policeman", "$55.00/hour", "Contractor")

console.log(printEmployeeForm1, printEmployeeForm2, printEmployeeForm3)

Employee.prototype.status = function() {
    console.log(this.Name + " is a " + this.Status)
}

// calling the function protype
printEmployeeForm1.status()
printEmployeeForm2.status()
printEmployeeForm3.status()