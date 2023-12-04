// = = = = = = = = [VARIABLES] = = = = = = = = //
let apiEndpoint = "localhost:8080/api"

// = = = = = = = = [STUDENTS] = = = = = = = = //
// Read the list of students (GET)
function readStudents(){
    // Get the information from the API
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data=> {
            // Displaying the result inside the div-container made for this effect
            document.getElementById('result-divider').innerText = JSON.stringify(data, null, 2);
        }).catch(error => {
            // Error-handler
            console.error('Error:', error)
    })
}

// Read one student based on ID (GET)
function readOneStudent(){

}

// Create a student and putting it inside the database (POST)
function createStudent(){

}

// Update a student based on ID (UPDATE)
function updateStudent(){

}

// Delete a student based on
function deleteStudent(){

}

// = = = = = = = = [GRADES] = = = = = = = = //


// = = = = = = = = [COURSES] = = = = = = = = //