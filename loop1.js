function method1(){
    let  age = 1;
    let msg = '';
    while (age <= 10) {
       msg = msg+"<br>"+age;
        age++;
    }
    document.getElementById('msg').innerHTML = msg;
}
function method2(){
    let  age = 1 ;
    let msgs = '';
    do {
        msgs = msgs+"<br>"+age;
        age++;
    }while(age <= 10);
document.getElementById('msgs').innerHTML = msgs;
}
function method3(){
    let msgss = '';
    for (let age = 1; age <= 10; age++ ) {
       msgss = msgss+"<br>"+age;
    }
 document.getElementById('msgss').innerHTML = msgss;
}