// // //print statement
// // console.log("javascript");

// // //variable
// // var myname = "ajali vala";
// // console.log(myname);
// // var _name = "vala anjali";
// // concat = muynme + _name;
// // console.log(concat);
// // console.log(my_name + _name)
// // var 123 age = 21;
// // console.log(123 age);
// // var $city = "india";
// // console.log($city);
// // var @email = "anjali@gmail.com"
// // console.log(@email);
// // var mark = -54;
// // console.log(mark);
// // var name2 = "anijee";
// // console.log(typeof(name2));
// // var israin = false;
// // console.log(typeof(israin));
// // var undefine;
// // console.log(typeof(undefine));
// // var num = '10';
// // console.log(typeof + num);
// // console.log(typeof Number(num));
// // console.log(typeof Boolean(num));

// // var a = 10;
// // var b = 7;
// // var c = a + b;
// // console.log(c);


// // d = 5 + '10';
// // console.log(d);

// // console.log("anjali" + "vala");
// // console.log(10 - "5");
// // console.log("anjiee" - "anni");
// // console.log(true + false);
// // console.log(false + true);
// // console.log(true + true);
// // console.log(false + false);

// // // arithmetic operators
// // var x = 100;
// // var y = 20;
// // sum = x + y;
// // console.log(sum);
// // p = x % y;
// // console.log(p);
// // var r = "hello" / 2;
// // console.log(r);
// // console.log(0.1 + 0.2);

// // var result = "hello" / 2;
// // console.log(result); //nan
// // console.log("5" + 5);
// // console.log("4" - 2);
// // console.log(3 == "4");
// // console.log(5 != 5);
// // console.log(13 > 5);
// // console.log(5 >= 5);
// // console.log(7 <= 6);
// // console.log(9 === "7");

// // // if else
// // var a = 10;
// // var b = 20;
// // if (a == b) {
// //     console.log("equal");

// // } else {
// //     console.log("not equal")
// // }

// // var isopen = false;
// // console.log(!isopen);

// // var age = 15;
// // if (age >= 18) {
// //     console.log("eligible for drive");
// // } else {
// //     console.log("not eligible for drive");
// // }

// // console.log(+4);
// // console.log(+"5");

// // var age1 = 21;
// // licence = true;
// // if (age1 >= 18 && licence == true) {
// //     console.log("eligible for drive");
// // } else {
// //     console.log(" not eligible for drive");
// // }

// // // using conditional operators
// // b = 25;
// // var result = b >= 18 ? "yes" : "no";
// // console.log(result);

// // console.log("5" - 3);
// // console.log(2 < 23 < 5);
// // console.log("21" + 12 + 1);

// // switch case
// var days = "monday";
// switch (days) {
//     case "monday":
//         console.log(days);
//         break;

//     case "tuesday":
//         console.log(days);
//         break;

//     case "wednesday":
//         console.log(days);
//         break

//     case "thurday":
//         console.log(days);
//         break;

//     case "friday":
//         console.log(days);
//         break;

//     case "saturday":
//         console.log(days);
//         break;

//     case "sunday":
//         console.log(days);
//         break;

//     default:
//         console.log("invalid day");
// }


// // // elseif
// // var light = "green";
// // if (light == "red") {
// //     console.log("stop");

// // } else if (light == "yellow") {
// //     console.log("slow");

// // } else if (light == "green") {
// //     console.log("go");

// // } else {
// //     console.log("adssad");
// // }

// // var weather = "rain";
// // if (weather == "rain") {
// //     console.log("need umbrella");
// // } else {
// //     console.log("not need umrella");

// // }

// // var a = "rain";
// // var r = a == "rain" ? "umberlla" : "not need umbrella";
// // console.log(r);

// // var student = "attendace";
// // var p = student == "attendance" ? "present" : "absent";
// // console.log(p);

// // var score = 10;
// // var loan = score >= 10 ? "eligible for loan" : "not";
// // console.log(loan);

// // var age1 = 20;
// // citizen = true;
// // if (age1 >= 18 && citizen == true) {
// //     console.log("register to vote");
// // } else {
// //     console.log(" not register for vote");
// // }

// // var music = "play"
// // switch (music) {
// //     case "play":
// //         console.log("music play");
// //         break;
// //     case "pause":
// //         console.log("music pause");
// //         break;
// //     case "stop":
// //         console.log("music stop");
// //         break;
// //     default:
// //         console.log("not working");
// // }

// // var a = 1;
// // while (a <= 10) {
// //     console.log(a);
// //     a++;
// // }

// var num = 6;
// var count = 1;
// while (count <= 10) {
//     console.log(num + " * " + count + " = " + count * num);
//     count++;
// }

// var n = 12;
// var Number = 1;
// while (Number <= 10) {
//     console.log(Number + " * " + Number + " = " + count * number)
// }


// var num = 1;
// while (num <= 10) {
//     // console.log("6 * " + num + " = " + 6 * num);
//     console.log(`6* ${num}=${6*num}`);
//     num++;
// }

// // do while loop
// var a = 1;
// do {
//     console.log(a);
//     a++;
// } while (a <= 10)


// // user input
// let input = prompt("enter a number:");
// let positivenumber;
// do {
//     // input = prompt("enter a number:");
//     positivenumber = parseFloat(input);
// } while (isNaN(positivenumber) || positivenumber < 0)
// console.log("enter number  is positive number:", positivenumber);

// // for loop
// var i = 1;
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var i = 1;
// for (var j = 1; j <= 10; j++) {
//     var sum = i + j;
//     console.log(sum);
// }

// var num = 1;
// for (num = 1; num <= 10; num++) {
//     console.log("6 * " + num + " = " + 6 * num);
//     // console.log(`6* ${num}=${6*num}`);

// }

// var num = 1;
// for (num = 1; num <= 10; num++) {
//     console.log("8* " + num + " = " + 8 * num);
//     // console.log(`6* ${num}=${6*num}`);

// }

// var num = 1;
// for (num = 1; num <= 10; num++) {
//     console.log("9 * " + num + " = " + 9 * num);
//     // console.log(`10 ${num}=${10*num}`);
// }

// var num = 1;
// for (num = 1; num <= 10; num++) {
//     console.log("12* " + num + " = " + 12 * num);
//     // console.log(`12* ${num}=${12*num}`);

// }

// // year is leap year or not
// var year = 2012;
// while (year % 4 == 0) {
//     console.log("year is leap year")
// }

// // 
// var year = 2011
// if (year % 4 == 0) {
//     console.log("leap year")
// } else {
//     console.log("not leap year")
// }

// // function
// function hello() {
//     var name = "anjali";

// }
// console.log("name is ", hello())


// var name = "anjali vala";
// name = "vala";
// console.log(name);

// const name = "anjali";
// console.log(name);


// // let
// let fname = "anjali";
// let lname = "val";
// name = $ { fname + lname };
// console.log(name);

// let age = 21;
// let mesg = "i am ${age} year old";
// console.log(mesg);

// // block of reusable code,used to organized
// function hello(name) {
//     console.log("my name is ${name}.");
// }
// hello("anjali");


// function hello(name, age, course) {
//     console.log(`hello ${name},your age is ${age},study in ${course}.`);

// }
// hello("anjali", 21, "mca");

// // 
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 29));

// // function with return type store in variable
// let num = function sum(a, b) {
//     return a + b;
// }
// console.log(num(12, 20));


//