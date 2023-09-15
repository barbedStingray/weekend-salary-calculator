console.log(`watch me crunch these numbers`);

const employeeTableDiv = document.querySelector(`#employee-table`);
const totalMonthDiv = document.querySelector(`#total-month`);

let totalAnnualSalary = 0;



function addEmployee(event){
    event.preventDefault();
    console.log(`adding employee`);

// remove the example
    removePlaceholder();

// variables for input
    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let idNumber = document.querySelector(`#id-number`).value;
    let title = document.querySelector(`#title-name`).value;
    let personStringSalary = document.querySelector(`#annual-salary`).value;
    
    console.log(personStringSalary);
    console.log(typeof personStringSalary);

// convert the salary from a string to a number
    let personNumberSalary = Number(personStringSalary);

    console.log(personNumberSalary);
    console.log(typeof personNumberSalary);

    totalAnnualSalary += personNumberSalary;
    console.log(totalAnnualSalary);


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
            <td id="the-salary">${personNumberSalary}</td>
            <td><button id="remove" onclick="removeEmployee(event)">Remove</button><td>
        </tr>
    `;

    totalMonthDiv.innerHTML = `<h4>${totalAnnualSalary/12}</h4>`

}

function removeEmployee(event){
    console.log(`removing employee`);
    // totalAnnualSalary
    event.target.parentElement.parentElement.remove();

    // append to DOM again
    // totalMonthDiv.innerHTML = `<h4>${totalAnnualSalary/12}</h4>`

}

function removePlaceholder(){
    console.log(`removing example`);
    let placeHolder = document.querySelector(`#place-holder`);
    placeHolder.innerHTML = ``;
}

