function method1(){
    let a = 10;
    switch (a) {
        case 1:
            console.log("Choice 1");
            break;
        case 2:
            console.log("Choice 2");
            break;
        case 3:
            console.log("Choice 3");
            break;
        case 4:
            console.log("Choice 4");
            break;
        default:
            console.log("None of the option");
            break;
    }
    
}
function method2(){
    let  age = 17;
    while (age > 18) {
        console.log("elgible your age "+age);
        age++;
    }
}
function method3(){
    let  age = 17;
    do {
        console.log("your age "+age);
        age++;
    }while (age > 18);
}
function method4(){
    for (let index = 0; index <= 5; index++) {
        console.log(index);
    }
    
}