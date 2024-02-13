function claculaRectangleArea(){
// get rectangle width value
const rectangleWidthInput = document.getElementById("rectangle-width");
const rectangleWidthText = rectangleWidthInput.value;
const width = parseFloat(rectangleWidthText);
console.log(width);

// get rectangle length value
const rectangleLengthInput = document.getElementById("rectangle-length");
const rectangleLengthText = rectangleLengthInput.value
const length = parseFloat(rectangleLengthText);

// calculate reactangle area
const area = width * length;

// display rectangle area
const display = document.getElementById("rectangle-area");
display.innerText = area;
}