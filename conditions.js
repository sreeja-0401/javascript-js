function ageCal() {
    let age = document.getElementById("age").value;
    console.log(age);
    alert("Checking Vote Elgiblity");
    if (age >= 18) {
        document.getElementById("msg").innerHTML = "age "+age+" elgible for vote.";
    }
    else {
        document.getElementById("msg").innerHTML = "age "+age+" not elgible for vote.";
    }
}



