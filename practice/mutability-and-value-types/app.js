// mutability and types

// immutable: data types that cannot be changed; =>passed by value
    // strings

    // numbers 
    var a = 30;
    var b = a;
    console.log(b);  // prints 30
    a = 40;
    console.log(b);  // print 30 too

    // booleans 

// mutable: data types that are containers (hold other data types); can be changed add or delete; =>passed by reference
    // 1. array
    // var arr = [9, 1, 2, 3, 4]
    // arr[0] = 6
    // console.log(arr)
    //OUTPUT: [ 6, 1, 2, 3, 4 ] (index 0 has been changed)

    // 2. object
    // var person = {
    //     name: "harry",
    //     age: 12
    // }
    // person.hasWand = true
    // console.log(person)
    //OUTPUT: { name: 'harry', age: 12, hasWand: true } (added another object in the array)

// typeof- returns type of data to its right=> to see what kind of data type is!
var person = {
    name: "harry",
    age: 12
}
console.log(typeof person)
//OUTPUT: object