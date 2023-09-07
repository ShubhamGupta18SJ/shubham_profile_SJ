// Function for Change a Colour of Text...
function color(dot) {
    var computedStyles = getComputedStyle(dot);
    var colorValue = computedStyles.backgroundColor;

    var textElement = document.getElementById("colour_changing_text");
    textElement.style.color = colorValue;

    var fontStyle = computedStyles.fontStyle;
    textElement.style.fontStyle = fontStyle;
}