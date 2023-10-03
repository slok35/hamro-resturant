// var mybutton = document.getElementById("go_up");

// window.onscroll = function() {
    
//     scrollFunction();

// }

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.getElementById("nav").style.visibility="visible";

// classswork
// let is camel casing
// let rijesh_marks = 10;
// let sabin_marks= 0;

// // || this is used for or
// // && is used for and
// // ! is used for not


// // this is or ko example
// if(rijesh_marks==0 || sabin_marks==0){
//   console.log("One Of The Mask Is 0");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression flase theyo");
// }

// // this is and ko example
// if(rijesh_marks==0 && sabin_marks==0){
//   console.log("This is and logical operator");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression sabay flase hunu parxa");
// }

// // this is not ko example
// if(rijesh_marks!=10){
//   console.log("This Is Not Logical Operator");
// }else{
//   console.log("Mathe ko code run bhayena kenake expression flase theyo");
// }

// hw

// let d_a= (97+112+101)/3;
// let k_a= (109+95+123)/3;

// console.log(`Team Dolphins Average Score Is ${d_a}`)
// console.log(`Team Koalas Average Score Is ${k_a}`)

// if(d_a>k_a && d_a>100){
//   console.log(`Team Dolphin Wins`)

// }else if(k_a>d_a && k_a>100){
//   console.log(`Team Koalas Wins`)

// }else if(k_a===d_a && (k_a && d_a)>100){
//   console.log(`Draw Match`)

// }else{
//   console.log("No Teams Win The Match")
// }

// while loop is also called entery control loop
// while loop chalna ko lagi condition true hunu nay paxa wrng bhayo bhane chaldayna

// do while loop is also called exit control loop
// do while loop ko tay use akxen bhaye ne hame haru false kura use garna sakxau

// while loop eg

let i = 10;
let j = 1;

while(i<=100){
  console.log("10" + "*" + j + "=" + i)
  i = i + 10;
  j++;
}

// do while loop eg

let r = 20;

 do{
  console.log(r);
  r++;
  
}

while(r<=20);

// for loop eg

let s;
for(s=2;  s<21; s=s+2 ){
  console.log(s);
}

// array properties

// length property
// length always starts from 1 not form 0

let names = ["Rijesh", "Laxman", "Ram", "Sita"];

let find_length= names.length;

console.log("The Leght Of These Names Is"+" "+ find_length);

// sort property

let f = ["Rijesh", "Laxman", "Ram", "Sita"];

f.sort()

console.log(f);

// pop property
// with pop we can remove last word or nuber 

let b = ["Rijesh", "Laxman", "Ram", "Sita"];

b.pop();

console.log(b);

// push property
// with pop we can add any text or number at last

let z = ["Rijesh", "Laxman", "Ram", "Sita"];

z.push("Puspa", "Raj", "Flower");

console.log(z);

// shift property
// if you want to remove first element use shift

let m = ["Rijesh", "Laxman", "Ram", "Sita"];
 m.shift();

console.log(m);

// unshift property
// it is used to add Element at first 

let h = ["Rijesh", "Laxman", "Ram", "Sita"];

h.unshift("Pagal");

console.log(h);

// reverse property 
// it use is to reverse element first to last and last to first
// reverse is only used to reverse sentence  not text

let u= ["Rijesh", "Laxman", "Ram", "Sita"];

u.reverse();

console.log(u);

// is arry property
// it is use to declare is the array is true or false

let x = ["Rijesh", "Laxman", "Ram", "Sita"];

let check= Array.isArray(x);

console.log(check);

// concat properties

let k = ["Rijesh", "Laxman", "Ram", "Sita"];

let y= ["Woo","Heelo","Yellow"];

console.log(k.concat(y));

// indexof properties
// it is used to search arry and says its position
// positions always starts from 0 not from 1

let bla = ["Rijesh", "Laxman", "Ram", "Sita"];



console.log(bla.indexOf("Sita"));

// class ma sekako

// this is called function defination
// const sum = function(){
//      console.log("Hello My Name Is Function");
// }

// sum();

// const di = function(){
//    return "Hello";

// }

// let answer = di();

// console.log(answer)

// const sum = function(a,b){
//       const answer=(a+b)
      
//       console.log(answer);
// }

// sum(100,200);
// sum(500,100);

const fName = "Rijesh";
const lname ="Sapkota";

const student = function(fn,ln){
       console.log(`My First Name Is ${fn} And My Last Name Is ${ln}`);
}

student(fName,lname);
student("Prabin","Panta");

// this is used for login pop
const learn_BTN = document.querySelector('.login_btn');
const popup = document.querySelector('.popup');
const cross = document.querySelector('.cross');

learn_BTN.addEventListener('click', function(){
    popup.classList.add('open');
});

cross.addEventListener('click',function(){
  popup.classList.remove('open');
});
// login pop finished

// create account pop start

const learn_BTN2 = document.querySelector('.create');
const popupp = document.querySelector('.my_popup');
const cross_2 = document.querySelector('my_cross');


learn_BTN2.addEventListener('click', function(){
  popup.classList.remove('open');
});

// learn_BTN2.addEventListener('click', function(){
//   popupp.classList.add('a_open');
// });

// cross_2.addEventListener('click', function(){
//   popupp.classList.remove('a_open');
// });

function work(){
  document.getElementById('my_popup').style.display= "block";
}

function no_w(){
  document.getElementById('my_popup').style.display= "none";

}

// contact us popup

const learn_BTN3 = document.querySelector('.contact');
const popupp2 = document.querySelector('.t_popup');
const cross_3 = document.querySelector('cro');

learn_BTN3.addEventListener('click', function(){
   popupp2.classList.add('x_open');
});

function work2(){
  popupp2.classList.remove('x_open');
}

// const input = prompt("What Is Your Name");

// console.log("Nice To Meet You "+input+".")















    




