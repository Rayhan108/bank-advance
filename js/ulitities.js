
// function for take a value from input or text area field

function getElementValueById(eventId){
    const eventField = document.getElementById(eventId);
    const eventFieldValueString = eventField.value;
    eventField.value='';
    const eventFieldValue =parseFloat(eventFieldValueString);
    return eventFieldValue; 
    
}

// function for take a value from other html elements

function getTextElementValueById(elementId){
    const elementIdTotal = document.getElementById(elementId);
    const elementIdTotalString = elementIdTotal.innerText;
    const elementIdTotalValue = parseFloat(elementIdTotalString);
    return elementIdTotalValue;
}

// function for set the value 
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
}