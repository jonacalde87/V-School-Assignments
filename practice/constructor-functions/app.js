// They build objects using keyword "new" to instantiate an object

// will start with uppercase (Car) when is a constructor function
function Car(make, model, year, honkSound) {
    this.make = make // "this" to refer to itself "Car"
    this.model = model
    this.year = year
    this.honkSound = honkSound
}
//instantiate the Car object
var jeep = new Car("Jeep", "Cherokee", 1995, "MMEERRRPP") //this is an object
var mazda = new Car("Mazda", "3 hatchback", 2015, "BBLLAARRPP")
console.log(jeep)
//OUTPUT: Car { make: 'Jeep', model: 'Cherokee', year: 1995 }
console.log(mazda)
//OUTPUT: 

Car.prototype.honk = function () {
    console.log(this.honkSound)
}

jeep.honk()
mazda.honk()

