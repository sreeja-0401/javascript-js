function ourrequirement() {
    let bloodgroup = document.getElementById("bloodgroup").value;
   console.log(bloodgroup);
    alert("checking blood group");
    if (bloodgroup === "A+" || bloodgroup === "B+") {
        document.getElementById("msg").innerHTML = "bloodgroup "+bloodgroup+" is available.";
           
    }
    else {
        document.getElementById("msg").innerHTML = "bloodgroup "+bloodgroup+" is not available.";
    }
}