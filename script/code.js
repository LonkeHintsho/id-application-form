document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let idNumber = document.getElementById("idNumber").value;
    let validationResult = validateID(idNumber);
    let resultElement = document.getElementById("result");
    let detailsElement = document.getElementById("details");
  
    if (validationResult.isValid) {
      resultElement.innerText = ""; // Clear previous result
      detailsElement.style.display = "block";
      document.getElementById("dob").innerText = validationResult.dateOfBirth;
      document.getElementById("gender").innerText = validationResult.gender;
    } else {
      detailsElement.style.display = "none";
      resultElement.innerText = "Invalid ID Number!";
    }
  });
  
  function validateID(id) {
    // Placeholder validation logic, replace with actual logic
    let isValid = true; // Placeholder value
    let dateOfBirth = "1994-05-10"; // Placeholder value
    let gender = "Male"; // Placeholder value
  
    // Return an object containing validation result, date of birth, and gender
    return {
      isValid: isValid,
      dateOfBirth: dateOfBirth,
      gender: gender
    };
  }
  
  