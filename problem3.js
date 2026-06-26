function check(age,citizen){
  if(age>=18&& citizen==true){
    console.log("can vote")
  }
  else{
    console.log("con not vote");
  }
}

let age=Number(prompt("Enter Your Age"));
let citizen= prompt("are you a citizen?(true/false)")=="true";
check(age,citizen);
