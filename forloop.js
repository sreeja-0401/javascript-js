function even(){
    let msg = '';
    for (let i = 1; i <= 20; i++ ) {
        if(i % 2 === 0){
       msg = msg+"<br>"+i;}
    }
 document.getElementById('msg').innerHTML = msg;
}




