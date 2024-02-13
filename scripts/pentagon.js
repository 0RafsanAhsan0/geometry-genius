function calculatePentagonArea(){
const peri = getInputValueById("penta-p");
const base = getInputValueById("penta-base")

const area = 0.5 * peri * base;
setInnerTextById("pentagon-area", area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
const element = document.getElementById(elementId);
element.innerText = area;
}