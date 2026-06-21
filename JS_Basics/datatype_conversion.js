let score = 18;
// to ways to know types 
console.log(typeof score); // number
console.log(typeof (score)); // number


//typeconversion to number
 score ="33";
 console.log(typeof (score)); // string
const is_number = Number(score);
console.log(typeof(is_number)); // nymber
console.log(is_number);        //33      

score="33abs" ; 
console.log(typeof score); // string
let tonum = Number(score);
console.log(tonum);      // NaN
console.log(typeof tonum) ; //number

score = null;
console.log(typeof score); // object
let convotonum= Number(score);
console.log(convotonum); // 0
console.log(typeof(convotonum));  // number
 
// string type conversion 
let age=33
console.log(typeof age); // number
let tostrng = String(age);
console.log(typeof tostrng);// string
console.log(tostrng);  //33  

// type conversion boolean to number 

let have_id = true;
console.log(typeof have_id);// boolean
let number = Number(have_id);
console.log(typeof number);  // number
console.log (number);          // 1

let have_fd = false;
console.log(typeof have_fd);  // boolean
let number2 = Number(have_fd);
console.log(typeof number2);  // number
console.log (number2);   //0 


let haveroll  = {};
console.log(typeof haveroll);  // object
let number3 = Number(haveroll);
console.log(typeof number3);  // number
console.log (number3);   //NaN


let name  = "priya";
console.log(typeof name);  // string
let convert_num = Number(name);
console.log(typeof convert_num);  // number
console.log(convert_num);   //NaN