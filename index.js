const movement = [100, -200, 50, -120];

// You deposited $..
// You withdrew $..

movement.forEach(element => {
    if (element > 0) {
        console.log(`You deposited $ ${element}`)
    } else {
        console.log(`You withdrew $ ${element}`)
    }
});


// -------------------------------------------------------

