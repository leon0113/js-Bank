// ? banking.html js

// ! handle deposite button event
document.getElementById('deposite-btn').addEventListener('click', function () {
    //? get the users deposite amount

    const depositeInput = document.getElementById('deposite');
    // ! disposite field e je amount dewa hbe oita amra newDzepositeAmount variable theke pabo
    const newDepositeAmount = depositeInput.value;
    // console.log(newDepositeAmount);
    // ! dipositeTotal hcche disposite window te koto amount dekhacche
    const depositeTotal = document.getElementById('deposite-Amount');
    // ! calculation to add new deposite
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);


    // ! dipositeTotal ta ke depositeAmount dara replace kori
    depositeTotal.innerText = newDepositeTotal;



    // ! Update Current balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotaltext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotaltext);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositeAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear the diposite input field
    depositeInput.value = ' ';
});

// ! Handle withdraw button events

document.getElementById('withdraw-btn').addEventListener('click', function () {

    // ! get the withdraw amount user inputed in the field
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmount = withdrawField.value;

    // ! get the current withdraw amount showing in the withdraw board
    const withdrawAmount = document.getElementById('withdraw-Amount');
    const previousWithdrawAmount = withdrawAmount.innerText;
    // ! calculation to add new withdraw amount with previous 
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    console.log(newWithdrawTotal);
    // ! Show new amount to the withdraw board
    withdrawAmount.innerText = newWithdrawTotal;


    // ! Update Current balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;











    // ! clear withdraw input field
    withdrawField.value = ' ';

});