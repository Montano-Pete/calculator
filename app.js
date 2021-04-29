const addNumberEL1 = document.getElementById('add-input-1');
const addNumberEL2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResultsE1 = document.getElementById('add-results')

addButton.addEventListener('click', () => {

    const addNumber1 = addNumberEL1.value;
    const addNumber2 = addNumberEL2.value;

    const addSum = Number(addNumber1) + Number(addNumber2)

    addResultsEl.textContent = addSum;
});