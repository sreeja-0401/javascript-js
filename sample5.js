function completed() {
    let username = document.getElementById("username").value;
   console.log (username)
    let mypassword = document.getElementById("mypassword").value;
   if(mypassword === ''){
    alert("please enter your password");
   }
   else{
    var mypassword1 = parseInt(mypassword);
    if(mypassword1 > 0){
    console.log(mypassword1);
   }
   else{
    alert("please enter correct values");
   }
   }
}