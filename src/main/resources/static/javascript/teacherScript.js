// = = = = = = = = [IMPORT] = = = = = = = = //
import * as utils from './utils.js';

// = = = = = = = = [EVENT HANDLER] = = = = = = = = //
// Event handlers for the inputs
function handleEnter(event) {
    // If the event is pressing enter
    if (event.keyCode === 13) {
        // Attributing to the correct function
        switch(event.target.id){
            // Teacher page
            case "TeacherID-1":
                readOneTeacher();
                break;
            case "TeacherName-1":
                createTeacher();
                break;
            case "TeacherName-2":
                updateTeacher();
                break;
            case "TeacherID-3":
                deleteTeacher();
                break;
            default:
        }
    }
}

// = = = = = = = = [TEACHERS] = = = = = = = = //
// Read the list of teachers (GET)
function readTeachers(){
    // Name of the result div
    const divName = 'readTeachers';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the list of teachers:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the information from the API
    fetch(apiEndpoint + "/teachers")
        .then(response => response.json())
        .then(data=> {

            createTableFromJSONList(divName + "-t", data);

        }).catch(error => {
            // Error-handler
            console.error('Error:', error) ;
    })

    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');

}

// Read one teacher based on ID (GET)
function readOneTeacher(){
    // Name of the result div
    const divName = 'readOneTeacher';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the found Teacher:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the ID of the Teacher
    const inputID = validateInput("TeacherID-1", "int");

    // Verification
    if (inputID === -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing ID<div>"
        return;
    }

    // Get the information from the API
    fetch(apiEndpoint + "/teachers/" + inputID)
        .then(response => response.json())
        .then(data=> {

            createTableFromJSONList(divName + "-t", data);

        }).catch(error => {
        // Error-handler
        console.error('Error:', error) ;
    })
    // Adding a format style
    document.getElementById(divName).classList.add('custom-div');
}

// Create a teacher and putting it inside the database (POST)
function createTeacher(){
    // Name of the result div
    const divName = 'createTeacher';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the created teacher server-response:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the Name of the Teacher
    const inputName = validateInput("TeacherName-1", "str");

    // Verification (Name)
    if (inputName === -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Name<div>"
        return;
    }

    // Creating the fetch request
    let options = {
        method: 'POST'
    }

    // Response variable
    let response = "";

    // Making the fetch request
    fetch(apiEndpoint + "/teacher/create?name=" + inputName, options)
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

// Update a teacher based on ID (UPDATE)
function updateTeacher(){
    // Name of the result div
    const divName = 'updateTeacher';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the update teacher server-response:</u></b><br><br><div id='" + divName + "-t'></div>" ;

    // Get the ID of the Teacher
    const inputID = validateInput("TeacherID-2", "int");

    // Get the Name of the Teacher
    const inputName = validateInput("TeacherName-2", "str");

    // Verification
    if (inputID === -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing ID<div>"
        return;
    }

    // Verification (Name)
    if (inputName === -1){
        document.getElementById(divName).innerHTML = "<div class='error'>Incorrect type or missing Name<div>"
        return;
    }

    // Creating the fetch request
    let options = {
        method: 'PUT'
    }

    // Response variable
    let response = "";

    // Making the fetch request
    fetch(apiEndpoint + "/teacher/update/" + inputID +"?name=" + inputName, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }).then(data => {

            if(data !== undefined){
                createTableFromJSONList(divName + "-t", data);
            }else{
                document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + "<div class='error'>The Teacher ID is not valid. Try again</div>";
            }

        }).catch(error => {
            // Handle errors here
            response = error;
            console.error('There was a problem with the PUT request:', error);
            document.getElementById(divName).innerHTML = document.getElementById(divName).innerHTML + error;
        });

    // Adding the format of the response div
    document.getElementById(divName).classList.add('custom-div');
}

// Delete a teacher based on
function deleteTeacher(){
    // Name of the result div
    const divName = 'deleteTeacher';

    // Introduction sentence
    document.getElementById(divName).innerHTML = "<u><b>Here is the update teacher server-response:</u></b><br><br>" ;

    // Get the ID of the Teacher
    const inputID = validateInput("TeacherID-3", "int");

    // Verification
    if (inputID === -1){
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
    fetch(apiEndpoint + "/teacher/delete/" + inputID, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }).then(data => {
        // Response OK
        response = response + "<b>The Teacher with the ID: <i>" + inputID + "</i> has been deleted.</b>";
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

// = = = = = = = = [EVENT HANDLER] = = = = = = = = //
    // ID
document.getElementById('TeacherID-1').addEventListener('keypress', handleEnter);
document.getElementById('TeacherID-3').addEventListener('keypress', handleEnter);