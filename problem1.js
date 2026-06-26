function marks(mark){
  if(mark>=80){
    console.log("A+");
  }
  else if(mark>=70){
    console.log("A");
  }
  else if(mark>=60){
    console.log("B");
  }
  else if(mark>=40){
    console.log("C");
  }
  else{
    console.log("FAil");
  }
}
let shi=Number(prompt("Enter Your Number"));
marks(shi);
