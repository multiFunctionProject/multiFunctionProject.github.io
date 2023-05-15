// Function to calculate BMI based on weight and height
function calculateBMI() {
  // Retrieve weight and height input values from the form
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  // Calculate BMI using the weight and height values
  const bmi = weight / (height * height);
  // Display the BMI value in the output element
  const result = document.getElementById("result");
  let message;
   // Display a message based on the calculated BMI value
  if (isNaN(bmi)) {
    message = "Please enter valid numbers";
  } else if (bmi < 18.5) {
    message = "Your BMI is underweight";
  } else if (bmi < 25) {
    message = "Your BMI is normal";
  } else if (bmi < 30) {
    message = "Your BMI is overweight";
  } else {
    message = "Your BMI is obese";
  }
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. ${message}`;
}


// Declare an empty array to store passwords
let passwords = [];

// Generate a random password based on user input
function generatePassword() {
  // Retrieve password length input value from the form
  const length = parseInt(document.getElementById("length").value);

  // Validate password length is between 4 and 14 characters
  if (length < 4 || length > 14) {
    alert("Password length should be between 4 and 14 characters.");
    return;
  }

  // Retrieve the result and password list elements from the HTML
  const result = document.getElementById("result");
  const passwordList = document.getElementById("password-list");
  
  // Generate a password using a cryptographically secure random number generator
  const password = Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => x % 36)
    .map((x) => x.toString(36))
    .join("");
    
  // Display the generated password in the HTML result element
  result.innerHTML = `Your password is ${password}`;
  // Add the generated password to the passwords array
  passwords.push(password);
  // Limit the passwords array to 5 passwords
  if (passwords.length > 5) {
    passwords.shift();
  }
  
  // Clear the HTML password list element and add each password in the array to the list
  passwordList.innerHTML = "";
  passwords.forEach((password) => {
    const li = document.createElement("li");
    li.innerText = password;
    passwordList.appendChild(li);
  });
}

    
function convert() {
  let value = document.getElementById("value").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (from === "inches") {
      switch (to) {
          case "centimeters":
              result = value * 2.54;
              break;
          case "meters":
              result = value * 0.0254;
              break;
          case "kilometers":
              result = value * 0.0000254;
              break;
          case "feet":
              result = value * 0.0833333;
              break;
          default:
              result = value;
              break;
      }
  } else if (from === "centimeters") {
      switch (to) {
          case "inches":
              result = value * 0.393701;
              break;
          case "meters":
              result = value * 0.01;
              break;
          case "kilometers":
              result = value * 0.00001;
              break;
          case "feet":
              result = value * 0.0328084;
              break;
          default:
              result = value;
              break;
      }
  } else if (from === "meters") {
      switch (to) {
          case "inches":
              result = value * 39.3701;
              break;
          case "centimeters":
              result = value * 100;
              break;
          case "kilometers":
              result = value * 0.001;
              break;
          case "feet":
              result = value * 3.28084;
              break;
          default:
              result = value;
              break;
      }
  } else if (from === "kilometers") {
      switch (to) {
          case "inches":
              result = value * 39370.1;
              break;
          case "centimeters":
              result = value * 100000;
              break;
          case "meters":
              result = value * 1000;
              break;
          case "feet":
              result = value * 3280.84;
              break;
          default:
              result = value;
              break;
      }
  } else if (from === "feet") {
      switch (to) {
          case "inches":
              result = value * 12;
              break;
          case "centimeters":
              result = value * 30.48;
              break;
          case "meters":
              result = value * 0.3048;
              break;
          case "kilometers":
              result = value * 0.0003048;
              break;
          default:
              result = value;
              break;
      }
  }

  document.getElementById("result").innerHTML = value + " " + from + " is equal to " + result + " " + to;
}
