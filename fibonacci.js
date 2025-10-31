function Fibonacci() {
    let Input = document.getElementById('Input');
    let result = document.getElementById('result');
    let limit = parseInt(Input.value);

   

    let mynumber = [];
    let n1 = 0, n2 = 1, nextTerm;

    if (limit === 0) {
        mynumber = [0];
    } else if (limit === 1) {
        mynumber = [0, 1];
    } else {
        mynumber = [0, 1];
        nextTerm = n1 + n2;
        while (nextTerm <= limit) {
            mynumber.push(nextTerm);
            n1 = n2;
            n2 = nextTerm;
            nextTerm = n1 + n2;
        }
    }
    console.log(mynumber)
    document.getElementById("result").innerHTML=mynumber;
}