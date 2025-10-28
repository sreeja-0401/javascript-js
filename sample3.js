function ourrequirement(){
    var a = document.getElementById("a").value;
    if (a == ''){
       alert("Please enter Values") 
    }
    else {
        var a1 = parseInt(a);
    if(a1 > 0){
        if (a1 % 2) {
        document.getElementById("msg").innerHTML = a1+ "number is an Odd Number.";
           
    }
    else {
        document.getElementById("msg").innerHTML = a1+ "number is an Even Number.";
    }
   }
   else{
    alert("please enter numbers only");
   } 
    }
   
}