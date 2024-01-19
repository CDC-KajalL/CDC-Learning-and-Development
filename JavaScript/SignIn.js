// var s = document.querySelector('hide');
// s.style.display = (s.style.display === 'none' || s.style.display === '') ? 'block' : 'none';

//Sign up storing in JSON
username = document.queryselector("name").value;
password = document.queryselector("pass").value;

var jsonData = localStorage.getItem("formData");

// Parse the JSON data back to a JavaScript object
var formData = JSON.parse(jsonData);

// Display the data on the webpage
var displayDiv = document.getElementById("displayData");
displayDiv.innerHTML =
  "<h2>Stored Data:</h2>" +
  "<p>Name: " +
  formData.name +
  "</p>" +
  "<p>Email: " +
  formData.email +
  "</p>" +
  "<p>Age: " +
  formData.age +
  "</p>";
