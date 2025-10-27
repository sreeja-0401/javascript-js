function completed() {
    let myname = document.getElementById("myname").value;
   console.log (myname)
    let myage = document.getElementById("myage").value;
   if(myage === ''){
    alert("age missed value");
   }
   else{
    var myage1 = parseInt(myage);
    if(myage1 > 0){
    console.log(myage1);
   }
   else{
    alert("please enter correct values");
   }
   }
   let mylanguage = document.getElementById("mylanguage").value;
   console.log (mylanguage)
   if(myskill.checked){
    console.log('C')
   }
   if(myskills.checked){
    console.log('C++')
   }
   if(myskillss.checked){
    console.log('JAVA')
   }
   if(myskillsss.checked){
    console.log('PYTHON')
   }
}
