// function calculateParallelogramArea(){
// const paraBase = document.getElementById("para-base");
// const paraBaseText = paraBase.value;
// const base = parseFloat(paraBaseText);


// const paraHeight = document.getElementById("para-height");
// const paraHeightText = paraHeight.value;
// const height = parseFloat(paraHeightText);

// const area = base * height;
// const display = document.getElementById("parallelogram-area");
// display.innerText = area;
// }


//2nd option
function calculateParallelogramArea(){
    const base = getInputValueById("para-base");
    const height = getInputValueById("para-height");

    const area = base * height;
    setInnerTextById("parallelogram-area", area);
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