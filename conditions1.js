function results() {
    let marks = document.getElementById("marks").value;
   console.log(marks);
    alert("checking result");
    if (marks >= 35) {
        document.getElementById("msg").innerHTML = "marks "+marks+" qualified the Exam.";
        console.log(marks);
        
    }
    else {
        document.getElementById("msg").innerHTML = "marks "+marks+" not qualified the Exam.";
    }
}