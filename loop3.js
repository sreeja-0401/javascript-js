function tables1() {
    let n = document.getElementById("num").value;
    let a = 1;
    let table1 = '';
    while (a <= 10) {
        table1 = table1 + "<br>" + (n + " x " + a + " = " + (n * a));
        a++;
    }
    document.getElementById("display1").innerHTML = table1;
}
function tables2() {
    let n = document.getElementById("num").value;
    let b = 1;
    let table2 = '';
     do {
         table2 = table2 + "<br>" + (n + " x " + b + " = " + (n * b));
        b++;
    } while (b <= 10);
    document.getElementById("display2").innerHTML = table2;
}
function tables3() {
    let n = document.getElementById("num").value;
    let  c= 1;
    let table3 = '';
     for (let c = 1; c <= 10; c++) {
        table3 = table3 + "<br>" + (n + " x " + c + " = " + (n * c));
    }
    document.getElementById("display3").innerHTML = table3;
}