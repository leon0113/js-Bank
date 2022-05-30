// ? banking.html js
// ! handle deposite button event
document.getElementById('deposite-btn').addEventListener('click', function () {
    //? get the users deposite amount

    const depositeInput = document.getElementById('deposite');
    // ! disposite field e je amount dewa hbe oita amra depositeAmount variable theke pabo
    const newDepositeAmount = depositeInput.value;
    console.log(newDepositeAmount);
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
})