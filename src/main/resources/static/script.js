// = = = = = = = = [VARIABLES] = = = = = = = = //
let apiEndpoint = 'http://localhost:8080/api'

// = = = = = = = = [MAIN FUNCTIONS] = = = = = = = = //
function createTableFromJSONList(divName, jsonList){
    // Getting the divider
    const div = document.getElementById(divName);

    // Creating a table
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

    // Adding the class
    table.classList.add('styled-table');

    // Checking if it is a JSON List or a JSON
    if(jsonList[0] != undefined){
        // Creating table header
        for (let key in jsonList[0]) {
            const headerCell = document.createElement('th');
            headerCell.textContent = key.toUpperCase();
            headerRow.appendChild(headerCell);
        }

        // Appending the table content
        for (let obj of jsonList) {
            const row = table.insertRow();
            for (let key in obj) {
                if (obj['name'] != 'ERROR'){
                    const cell = row.insertCell();
                    cell.textContent = obj[key];
                }
            }
        }
    }else{
        // Creating table header
        for (let key in jsonList) {
            const headerCell = document.createElement('th');
            headerCell.textContent = key.toUpperCase();
            headerRow.appendChild(headerCell);
        }

        // Appending the table content
        const row = table.insertRow();
        for (let key in jsonList) {
            const cell = row.insertCell();
            cell.textContent = jsonList[key];
        }
    }

    // Adding the created table to the divider
    div.appendChild(table);

    div.classList.add('custom-div');
}

function validateInput(inputName, type) {
    // Getting the content of input
    const inputElement = document.getElementById(inputName);
    const inputValue = inputElement.value.trim();

    if (type == "int"){
        // Regular expression to match integers (positive or negative)
        const intPattern = /^\d+$/;

        if (intPattern.test(inputValue)) {
            // Validating input
            return inputValue;
        } else {
            // Refusing input
            return -1;
        }
    }else{
        // Regular expression to match integers (positive or negative)
        const intPattern = /^[A-Za-z]+$/;

        if (intPattern.test(inputValue)) {
            // Validating input
            return inputValue;
        } else {
            // Refusing input
            return -1;
        }
    }
}

// Event handlers for the inputs
function handleEnter(event) {
    // If the event is pressing enter
    if (event.keyCode === 13) {
        // Attributing to the correct function
        switch(event.target.id){
            // Student page
            case "StudentID-1":
                readOneStudent();
                break;
            case "StudentAge-1":
                createStudent();
                break;
            case "StudentAge-2":
                updateStudent();
                break;
            case "StudentID-4":
                deleteStudent();
                break;
            default:
        }
    }
}

// = = = = = = = = [STUDENTS] = = = = = = = = //
// Read the list of students (GET)
function readStudents(){
    // Name of the result div
    const divName = 'readStudents';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the list of students:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the information from the API
    fetch(apiEndpoint + "/students")
        .then(response => response.json())
        .then(data=> {

            createTableFromJSONList(divName + "-t", data);

        }).catch(error => {
            // Error-handler
            console.error('Error:', error) ;
    })

    // Closing the divider
    //document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + "</div>";

    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');

}

// Read one student based on ID (GET)
function readOneStudent(){
    // Name of the result div
    const divName = 'readOneStudent';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the found Student:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the ID of the Student
    const inputID = validateInput("StudentID-1", "int");

    // Verification
    if (inputID == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing ID<div>"
        return;
    }

    // Get the information from the API
    fetch(apiEndpoint + "/students/" + inputID)
        .then(response => response.json())
        .then(data=> {

            createTableFromJSONList(divName + "-t", data);

        }).catch(error => {
        // Error-handler
        console.error('Error:', error) ;
    })

    // Closing the divider
    //document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + "</div>";

    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');
}

// Create a student and putting it inside the database (POST)
function createStudent(){
    // Name of the result div
    const divName = 'createStudent';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the created student server-response:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the Name of the Student
    const inputName = validateInput("StudentName-1", "str");

    // Get the Age of the Student
    const inputAge = validateInput("StudentAge-1", "int");

    // Verification (Name)
    if (inputName == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Name<div>"
        return;
    }

    // Verification (Age)
    if (inputAge == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Age<div>"
        return;
    }

    // Creating the fetch request
    let options = {
        method: 'POST'
    }

    // Response variable
    let response = "";

    // Making the fetch request
    fetch(apiEndpoint + "/student/create?name=" + inputName + "&age=" + inputAge, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {

            createTableFromJSONList(divName + "-t", data)

        }).catch(error => {
            // Handle errors here
            response = error;
            console.error('There was a problem with the POST request:', error);
            document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + error;
        });

    // Adding the format of the response div
    document.getElementById(divName).classList.add('custom-div');
}

// Update a student based on ID (UPDATE)
function updateStudent(){
    // Name of the result div
    const divName = 'updateStudent';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the update student server-response:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the ID of the Student
    const inputID = validateInput("StudentID-2", "int");

    // Get the Name of the Student
    const inputName = validateInput("StudentName-2", "str");

    // Get the Age of the Student
    const inputAge = validateInput("StudentAge-2", "int");

    // Verification
    if (inputID == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing ID<div>"
        return;
    }

    // Verification (Name)
    if (inputName == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Name<div>"
        return;
    }

    // Verification (Age)
    if (inputAge == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Age<div>"
        return;
    }

    // Creating the fetch request
    let options = {
        method: 'PUT'
    }

    // Response variable
    let response = "";

    // Making the fetch request
    fetch(apiEndpoint + "/student/update/" + inputID +"?name=" + inputName + "&age=" + inputAge, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {

            createTableFromJSONList(divName + "-t", data)

        }).catch(error => {
            // Handle errors here
            response = error;
            console.error('There was a problem with the PUT request:', error);
            document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + error;
        });

    // Adding the format of the response div
    document.getElementById(divName).classList.add('custom-div');
}

// Delete a student based on
function deleteStudent(){
    // Name of the result div
    const divName = 'deleteStudent';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the update student server-response:</u></b><br><br>" ;

    // Get the ID of the Student
    const inputID = validateInput("StudentID-3", "int");

    // Verification
    if (inputID == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing ID<div>"
        return;
    }

    // Creating the fetch request
    let options = {
        method: 'DELETE'
    }

    // Response variable
    let response = "";

    // Making the fetch request
    fetch(apiEndpoint + "/student/delete/" + inputID, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }).then(data => {
        // Response OK
        response = response + "<b>The Student with the ID: <i>" + inputID + "</i> has been deleted.</b>";
        document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + response;
    }).catch(error => {
        // Handle errors here
        response = error;
        console.error('There was a problem with the DELETE request:', error);
        document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + error;
    });

    // Adding the format of the response div
    document.getElementById(divName).classList.add('custom-div');
}

// Event handlers
    // ID
document.getElementById('StudentID-1').addEventListener('keypress', handleEnter);
document.getElementById('StudentID-3').addEventListener('keypress', handleEnter);
    // Age
document.getElementById('StudentAge-1').addEventListener('keypress', handleEnter);
document.getElementById('StudentAge-2').addEventListener('keypress', handleEnter);

// = = = = = = = = [GRADES] = = = = = = = = //


// = = = = = = = = [COURSES] = = = = = = = = //