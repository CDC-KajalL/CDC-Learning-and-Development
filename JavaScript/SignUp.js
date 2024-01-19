document.getElementById("submit").addEventListener("click", () => {
    // Corrected selector with #
    var u = document.querySelector(".username").value;
    var p = document.querySelector(".password").value;

    var formData = {
        username: u,
        password: p
    };
    console.log(u);
    console.log(p);
    // Convert the object to JSON
    var jsonData = JSON.stringify(formData);

    // Store the JSON data in local storage
    localStorage.setItem('formData', jsonData);

    function displayData() {
        // Retrieve JSON data from local storage
        var jsonData = localStorage.getItem('formData');

        // Parse the JSON data back to a JavaScript object
        var formData = JSON.parse(jsonData);

        // Display the data on the webpage
        var displayDiv = document.getElementById('displayData');
        displayDiv.innerHTML = '<h2>Stored Data:</h2>' +
            '<p>Username: ' + formData.username + '</p>' +
            '<p>Password: ' + formData.password + '</p>';
    }

    displayData();
});

console.log("hello");

