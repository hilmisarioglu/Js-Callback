const movement = [100, -200, 50, -120];
arrDeposits=[];
arrWithdraws=[];
// You deposited $..
// You withdrew $..

movement.forEach(element => {
    if (element > 0) {
        console.log(`You deposited $ ${element}`)
        arrDeposits.push(element)
    } else {
        console.log(`You withdrew $ ${element}`)
        arrWithdraws.push(element)
    }
});

console.log('Deposits are :',arrDeposits)
console.log('Withdraws are :',arrWithdraws)
// -------------------------------------------------------

