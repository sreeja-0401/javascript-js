
        // // Prompt the user to enter a number
        // const number = parseInt(prompt("Enter an integer to generate its multiplication table:"));

        // // Check if the input is a valid number
         function ourrequirement(){
    var a = document.getElementById("a").value;
    if (a == ''){
       alert("Please enter Values") 
    }
    else {
        var a1 = parseInt(a);
    }


            let number = a
            let i = 1; // Initialize the counter for the multiplication
            let output = "<h2>Multiplication Table for " + a + "</h2>";

            
            while (i <= 10) {
                const result = a * i;
                output += "<p>" + a + " * " + i + " = " + result + "</p>";
                i++; // Increment the counter
            }

            // Display the multiplication table in the HTML div
            document.getElementById("multiplicationTable").innerHTML = output;
        }
    

