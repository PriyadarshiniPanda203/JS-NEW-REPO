//in the primitive type datatype we use the concept of stack ,, where we got the copies of that data
let my_self="priyadarshini";
let my_nickname= my_self; 
console.log(my_nickname);  
my_nickname = "priya"; // copied value (stack)
console.log(my_self);

//value refferenced here(heap)
let userone={
  email:"priyadarshinipanda2138@gmail.com ",
  UpI : "XYZ123"
}

let usertwo=userone;
//console.log(usertwo);
usertwo.email = "sky2134panda@gmail.com" ;
console.log(userone.email);
console.log(usertwo.email); // here referenced emailvalue changed 
