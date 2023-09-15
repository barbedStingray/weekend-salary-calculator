console.log(`watch me crunch these numbers`);

const employeeTableDiv = document.querySelector(`#employee-table`);
const totalMonthDiv = document.querySelector(`#total-month`);

let totalAnnualSalary = 0;
let personList = [];




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
    
// salary in string form
    // console.log(personStringSalary);
    // console.log(typeof personStringSalary);

// convert the salary from a string to a number
    let personNumberSalary = Number(personStringSalary);

// check that its a number
    // console.log(personNumberSalary);
    // console.log(typeof personNumberSalary);


    // adjust your total salary annually
    totalAnnualSalary += personNumberSalary;


    // create an array of objects...
    // let personObj =
    //     {
    //         nameF: firstName,
    //         nameL: lastName,
    //         idNum: idNumber,
    //         titl: title,
    //         salary: personNumberSalary
    //     };

    // console.log(personObj);

    // // push the object to an array outside the function
    // personList.push(personObj);
    // console.log(personList);

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

    totalMonthDiv.innerHTML = `<h4>${totalAnnualSalary}</h4>`
    console.log(totalAnnualSalary);

}

function removeEmployee(event){
    console.log(`removing employee`, event.target);
    event.target.parentElement.parentElement.remove();
}


function removePlaceholder(){
    console.log(`removing example`);
    let placeHolder = document.querySelector(`#place-holder`);
    placeHolder.innerHTML = ``;

}






