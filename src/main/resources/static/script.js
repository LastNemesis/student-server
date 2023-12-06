// = = = = = = = = [VARIABLES] = = = = = = = = //
let apiEndpoint = 'http://localhost:8080/api'

// = = = = = = = = [MAIN FUNCTIONS] = = = = = = = = //
function createTableFromJSONList(divName, jsonList){
    // Getting the divider
    const div = document.getElementById(divName);

    // Creating a table
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

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
}

function validateInput(inputName) {
    const inputElement = document.getElementById(inputName);
    const inputValue = inputElement.value.trim();

    // Regular expression to match integers (positive or negative)
    const intPattern = /^\d+$/;

    if (intPattern.test(inputValue)) {
        // Validating input
        return inputValue;
    } else {
        // Refusing input
        return -1;
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
    document.getElementById(divName).innerHTML = "<u>Here is the list of students:</u><br><br>" ;

    // Get the information from the API
    fetch(apiEndpoint + "/students")
        .then(response => response.json())
        .then(data=> {
            // Calling function to transform JSON into Table
            createTableFromJSONList(divName, data);
        }).catch(error => {
            // Error-handler
            console.error('Error:', error) ;
    })

    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');

}

// Read one student based on ID (GET)
function readOneStudent(){
    // Name of the result div
    const divName = 'readOneStudent';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u>Here is the found Student:</u><br><br>" ;

    // Get the ID of the Student
    const inputValue = validateInput("StudentID-1");

    // Verification
    if (inputValue == -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type<div>"
        return;
    }

    // Get the information from the API
    fetch(apiEndpoint + "/students/" + inputValue)
        .then(response => response.json())
        .then(data=> {

            createTableFromJSONList(divName, data);

        }).catch(error => {
        // Error-handler
        console.error('Error:', error) ;
    })

    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');
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

// Event handlers
    // ID
document.getElementById('StudentID-1').addEventListener('keypress', handleEnter);
document.getElementById('StudentID-3').addEventListener('keypress', handleEnter('keypress', 4));
    // Age
document.getElementById('StudentAge-1').addEventListener('keypress', handleEnter('keypress', 2));
document.getElementById('StudentAge-2').addEventListener('keypress', handleEnter('keypress', 4));

// = = = = = = = = [GRADES] = = = = = = = = //


// = = = = = = = = [COURSES] = = = = = = = = //