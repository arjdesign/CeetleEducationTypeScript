

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

var a = {} as Todo

a



// JavaScript vs TypeScript

//implicit type defination in javascript


//-------------------------------------------
//Type annotation vs inference

//annotation with primitives
let userName = "123"
let isNull:null= null
let isUndefined:undefined = undefined
let mynumber:number = 1

let mno:string;
mno ="name"



//annotation with objects
const date:Date = new Date();
let strValues:int[] = ["a",'b']
let numValues:number[] = []

class Car {
}
let car:Car = new Car()
let carb:Car
//annotation for functions
    //tell what arguments the function is going to take
    //what values it is going to return

    function printName3(name){
        console.log(name)
    }
    const printMyName2 = (name) => {
        console.log(name)
    }
    
    const printMyName: (name:string) => string = (name:string) => {
        console.log(name)
        return ("manoj")
    }

//-----------------------------------
//inference
let userName2 = "khan"
 //inference catch
let username3:string;
username3 = "Ram"

//---------------------------------------
//Why use interface
let user1: {
    firstName: string,
    lastName: string,
    age: number,
    weight:string 
} = {
    firstName: "jack",
    lastName: "Ma",
    age: 60,
    weight:"150lb"  
};


//make type resuable using interface.
interface User {
    firstName: string,
    lastName: string,
    age: number,
    weight:string 
}

let user2:User = {
    firstName: "John",
    lastName: "Sparrow",
    age: 60,
    weight:"180lb"

}

//------------------------------
//annotation use case
//1) when Function returns 'any' type

const userJson = '{"name": "John", "address": "Mars"}'
const user = JSON.parse(userJson)

//fix

interface UserJson {
    name:string;
    address:string
}
const userWithType:UserJson = JSON.parse(userJson)

//2 When declared variable in one line and initialized later

let name4
name4 = "Gita"

//Fix
let name2:string
name2 = "Gita"

//3 When variable's type cannot be inferred.

let nameArray = ["jack", "rita", "shyam", "hari"];
let foundUser: boolean |string  = false ;

for (let name of nameArray){
    if (nameArray[name] === "hari"){
        foundUser =nameArray[name]

    }
}
