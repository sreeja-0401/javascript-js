function method1() {
     let doners = [ "Sreeja-O+", "Sai-A" , "Pooja-B+" , "Yogesh-B-" , "Srinu-AB+"];
    console.log(doners);
    doners.push("Sowmya-O-");
    console.log(doners);
    doners.pop();
    console.log(doners);
    doners.unshift("sowmya-A+");
    console.log(doners);
    doners.shift();
    console.log(doners);
    doners.reverse();
    console.log(doners);
    doners.sort();
    console.log(doners);
    doners.splice(2);
    

    for(let person of doners)
    {
        console.log(person);
    
}
}