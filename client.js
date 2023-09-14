console.log(`watch me crunch these numbers`);

const employeeTableDiv = document.querySelector(`#employee-table`);


function addEmployee(event){
    event.preventDefault();
    console.log(`adding employee`);

// variables for input
    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let idNumber = document.querySelector(`#id-number`).value;
    let title = document.querySelector(`#title-name`).value;
    let annualSalary = document.querySelector(`#annual-salary`).value;
    

// clearing your input boxes after submission
    document.querySelector(`#first-name`).value = ``;
    document.querySelector(`#last-name`).value = ``;
    document.querySelector(`#id-number`).value = ``;
    document.querySelector(`#title-name`).value = ``;
    document.querySelector(`#annual-salary`).value = ``;

// DOM population
    employeeTableDiv.innerHTML += 
    `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td><button id="remove" onclick="removeEmployee(event)">Remove</button><td>
        </tr>
    `

}

function removeEmployee(event){
    console.log(`removing employee`);
    event.target.parentElement.parentElement.remove();
}