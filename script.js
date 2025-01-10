const whiteLamp = document.querySelector('.white-lamp');
const yellowLamp = document.querySelector('.yellow-lamp');
const offOnButton = document.getElementById('button');

console.log(whiteLamp, yellowLamp, offOnButton);

// Risoluzione esercizio 1 //
offOnButton.addEventListener('click', () => {

    whiteLamp.className = 'hidden';
    yellowLamp.className = 'active';

})



// Risoluzione esercizio 2 //


// offOnButton.addEventListener('click', () => {

//     whiteLamp.classList.add('hidden');
//     yellowLamp.classList.remove('hidden');
    
// })
