// = = = = = = = = [VARIABLES] = = = = = = = = //
// Saving the API Endpoint
let apiEndpoint = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + "api";

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
    if(jsonList[0] !== undefined){
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
                if (obj['id'] !== 0){
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

    if (type === "int"){
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