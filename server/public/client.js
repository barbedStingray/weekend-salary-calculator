console.log(`watch me crunch these numbers`);

const employeeTableDiv = document.querySelector(`#employee-table`);
const totalMonthDiv = document.querySelector(`#total-month`);
const turnRedDiv = document.querySelector(`#turn-red`);

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
    
// convert the salary from a string to a number
    let personNumberSalary = Number(personStringSalary);
    console.log(typeof personNumberSalary);

    // adjust your total salary annually
    totalAnnualSalary += personNumberSalary;

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
            <td>${personNumberSalary}</td>
            <td><button id="remove" onclick="removeEmployee(event, ${personNumberSalary})">X</button></td>
        </tr>
    `;

    totalMonthDiv.innerHTML = `<h4>${Math.floor(totalAnnualSalary/12)}</h4>`
    console.log(totalAnnualSalary);    


    if(totalAnnualSalary/12 > 20000){
        turnRedDiv.style.backgroundColor = `red`;
    }

    }

function removeEmployee(event, salary){
    console.log(`removing employee`, salary);

    totalAnnualSalary -= salary;

    if(totalAnnualSalary/12 < 20000){
        turnRedDiv.style.backgroundColor = `mintcream`;
    }

    totalMonthDiv.innerHTML = `<h4>${Math.floor(totalAnnualSalary/12)}</h4>`

    event.target.parentElement.parentElement.remove();
}


function removePlaceholder(){
    console.log(`removing example`);
    let placeHolder = document.querySelector(`#place-holder`);
    placeHolder.innerHTML = ``;
}









