function total(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    if(a === ''){
    alert("please enter Telugu marks");
   }
    if(b === ''){
    alert("please enter Hindi marks");
   }
    if(c === ''){
    alert("please enter English marks");
   }
    if(d === ''){
    alert("please enter Maths marks");
   }
    if(e === ''){
    alert("please enter Science marks");
   }
    if(f === ''){
    alert("please enter Social marks");
   }
    var g = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f);
    document.getElementById("g").value = g;

     if(g >= 500){
            document.getElementById("h").value = "O grade";
    }
    else if(g >= 400){
             document.getElementById("h").value = "A+ grade";
    }
    else if(g >=300){
            document.getElementById("h").value = "A grade";
    }
    else {
         document.getElementById("h").value = "fail";
    }
}


function addition(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    document.getElementById("g").value = a+b+c+d+e+f;
}
function total1(){
    var g = document.getElementById("g").value;
    if(g = 500){
            document.getElementById("h").innerHTML = "O grade";
    }
    else if(g >= 400){
             document.getElementById("h").innerHTML = "A+ grade";
    }
    else if(g >=300){
            document.getElementById("h").innerHTML = "A+ grade";
    }
    else {
         document.getElementById("h").innerHTML = "fail";
    }
}
