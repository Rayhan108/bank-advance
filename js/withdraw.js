document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = getElementValueById('withdraw-field');
    // validation

    if(isNaN(withdrawField)){
        alert('Please enter a valid number');
        return;
    }
    const withdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawAmount = withdrawField+withdrawTotal;
    setTextElementValueById('withdraw-total',newWithdrawAmount);
    const previousBalance =getTextElementValueById('current-balance');
    const newBalance = previousBalance - withdrawField;
    setTextElementValueById('current-balance',newBalance);

})