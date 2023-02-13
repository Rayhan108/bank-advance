
// function for take a value from input or text area field

document.getElementValueById(eventId){
    const depositeField = document.getElementById('eventId');
    const depositeFieldValueString = depositeField.value;
    depositeField.value='';
    const depositeFieldValue =parseFloat(depositeFieldValueString);
    return depositeFieldValue; 
}

// function for take a value from other html elements

document.getTextElementValueById(elementId){
    const depositeTotal = document.getElementById('elementId');
    const depositeTotalString = depositeTotal.innerText;
    const depositeTotalValue = parseFloat(depositeTotalString);
}

// function for set the value 
document.setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById('elementId');
    textElement.innerText = newValue; 
}