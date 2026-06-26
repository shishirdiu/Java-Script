function check(tem){
  if(tem<0){
    console.log("Freezing");
  }
  else if(tem<=15){
    console.log("cold");
  }
  else if(tem<=30){
    console.log("Warm");
  }
  else{
    console.log("Hot");
  }
}
let age=Number(prompt("Enter Your Temperature"));
check(age);
