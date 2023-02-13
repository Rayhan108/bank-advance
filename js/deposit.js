document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeField = getElementValueById('deposite-field');
    if(isNaN(depositeField)){
        alert('Please enter a valid number');
        return;
    }
    const depositeTotal = getTextElementValueById('deposite-total');
    const newDepositAmount = depositeTotal + depositeField;
    setTextElementValueById('deposite-total',newDepositAmount);
    const previousBalance =getTextElementValueById('current-balance');
    const currentBalance =previousBalance+depositeField;
    setTextElementValueById('current-balance',currentBalance);
   

})