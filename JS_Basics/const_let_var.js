//const Account_Id= 0598763579208635;
//the red underline appears because JavaScript treats numbers that start with a leading 0 specially, and in modern JavaScript some of these formats are considered invalid or confusing.
//or if it's an account ID that must keep the leading zero, store it as a string:

//creating a user input form by taking assigning accountid ,nd taking inputs from users like user name ,password ,mobile number ,city ,place ,date of joining ,Email_id
"use strict";
const Account_Id1= "085389025024";
Email_id = "priyadarshinipanda2138@gmail .com";
let password = "priya@143";
let name1= "priyadarshini";
let phn_num = 89247878924 ;
let place = "Nimapda,puri";
console.log(Email_id);
//i have not given any declaration  before Emil_id ,, bt still it took it as an variable and prints email id how ? what's the concept behind this ? 

// Concept: Implicit Global Variables

//When JavaScript is running in non-strict mode, if you assign a value to a name that has never been declared, JavaScript automatically creates a global variable.
//like window.EMAIL_ID =priyadarshinipanda2138@gmail .com" // IN BROWSER

//Strict Mode Prevents This ISSUE :-
//"use strict";
 Email_id = "riyadarshinipanda2138@gmail .com";
 console.log(Email_id);
//In JavaScript, strict mode is enabled only when the statement appears as the first executable statement in a script or function.
 // now its showing Refference Error : Email_id is not defined 


                 



