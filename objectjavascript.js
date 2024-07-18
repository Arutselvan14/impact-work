// console.log("creating a object with 3 types");

// var obj1={
//     name:"raj",
//     age:24
// }

// console.log("data type:",typeof(obj1));
// console.log("before adding place & area:",obj1);
// obj1.place ="madurai";
// obj1.area ="thallakulam";
// console.log("after adding place & area:",obj1);
// console.log("obj1 place value:",obj1["place"]);

// second type

// var obj = new Object();
// obj.name =  "ponraj";
// obj.age = 25;
// obj.gender = "male";

// console.log("before delete",obj);
// delete obj["name"];
// console.log("after delete",obj);

// var obj2 = new cons1();
// function cons1() {
//     this.name = "messi",
//     this.age = 36,
//     this.role = "football player"
// }
// cons1();
// console.log("obj2:", obj2);

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));

// array creation injavascript 

// console.log("///////Array  creation injavascript ////////");
var arr =["ponraj","ram", "raj"];
var no =[1,2,3,4,5,6];
console.log(arr);
console.log(no);
console.table(arr);
console.table(no);


let a = [];
a[0] = "raj";
a[1] = "ram";
a[2] = "abi";
a[3] = "tara";
console.log(a);
console.table("table type: ",a);

var a1 = new Array(); //third method
a1[0] = "value1";
a1[1] = "value2";
a1[2] = "value3";
console.table(a1);
console.log(typeof(a1));

// forth method 
var a2 = new Array("raj,ravi");
console.log(a2);

// console.log("length="a2.length);


let car = {
    name: "bmw",
    color: "blue",
    mileage : 45,
    display:  function(){
       alert("user name is" + this.name)
         
    }
}
console.log(car);


car ={...car, qualification: "degree"}
console.log(car);

// object 2

const user ={}
// const user = new Object()
user.firstname = "karumukilan"
user.lastname = "subbish"
console.log(user)

console.log(user.lastname + " " + user.firstname);
console.log(user["firstname"]+ " " + user ["lastname"])

// object3
const used = {

firstname : "karumukilan",
lastname: "subbish",

marks: {
     sslc: 700,
     hsc: 800,
     degree: 7.5
    
      },

      fullname: function(){
         return this.firstname + " " + this.lastname

      }
}
console.log(used.firstname+ " " + used.marks.degree)
console.log(used.marks.hsc)
console.log(used.fullname());



