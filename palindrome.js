// program to check if the string is palindrome or not

function checkPalindrome() {

var string = document.getElementById("string").value;
    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

   if (string == ''){
       alert("Please enter Values") 
    }

    else if (string == reverseString) {
        document.getElementById("msg").innerHTML = "It is a palindrome.";
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
         document.getElementById("msg").innerHTML = "It is not a palindrome.";
    }
}






