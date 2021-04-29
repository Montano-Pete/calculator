const addNumberEL1 = document.getElementById('add-input-1');
const addNumberEL2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResultsE1 = document.getElementById('add-results')

addButton.addEventListener('click', () => {

    const addNumber1 = addNumberEL1.value;
    const addNumber2 = addNumberEL2.value;

    const addSum = Number(addNumber1) + Number(addNumber2);

    addResultsE1.textContent = addSum;
});

const subNumberEL1 = document.getElementById('sub-input-1');
const subNumberEL2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResultsE1 = document.getElementById('sub-results')

subButton.addEventListener('click', () => {

    const subNumber1 = subNumberEL1.value;
    const subNumber2 = subNumberEL2.value;

    const subSum = Number(subNumber1) - Number(subNumber2);

    subResultsE1.textContent = subSum;
});

const divNumberEL1 = document.getElementById('div-input-1');
const divNumberEL2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResultsE1 = document.getElementById('div-results')

divButton.addEventListener('click', () => {

    const divNumber1 = divNumberEL1.value;
    const divNumber2 = divNumberEL2.value;

    const divSum = Number(divNumber1) / Number(divNumber2);

    divResultsE1.textContent = divSum;
});

const multNumberEL1 = document.getElementById('mult-input-1');
const multNumberEL2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResultsE1 = document.getElementById('mult-results')

multButton.addEventListener('click', () => {

    const multNumber1 = multNumberEL1.value;
    const multNumber2 = multNumberEL2.value;

    const multSum = Number(multNumber1) * Number(multNumber2);

    multResultsE1.textContent = multSum;
});