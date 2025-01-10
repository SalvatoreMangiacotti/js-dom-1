const whiteLamp = document.getElementById('white-lamp');
const yellowLamp = document.getElementById('yellow-lamp');
const offOnButton = document.getElementById('button');

const body = document.querySelector('body');

console.log(whiteLamp, yellowLamp, offOnButton);

// Risoluzione esercizio 1 //

// offOnButton.addEventListener('click', () => {

//     whiteLamp.className = 'hidden';
//     yellowLamp.className = 'active';

// })



// Risoluzione esercizio versione 2 //

// offOnButton.addEventListener('click', () => {

//     whiteLamp.classList.remove('active');
//     whiteLamp.classList.add('hidden');
//     yellowLamp.classList.remove('hidden');

// })



// Risoluzione bonus 1 //

// offOnButton.addEventListener('click', () => {

//     if (whiteLamp.className.includes('active')) {

//         whiteLamp.className = 'hidden';
//         yellowLamp.className = 'active';
//         offOnButton.textContent = 'Spegni';

//         offOnButton.style.backgroundColor = 'orange';

//     } else {

//         whiteLamp.className = 'active';
//         yellowLamp.className = 'hidden';
//         offOnButton.textContent = 'Accendi';

//         offOnButton.style.backgroundColor = '';

//     }

// })



// Bonus versione 2 //

offOnButton.addEventListener('click', () => {

    if (whiteLamp.className.includes('active')) {

        whiteLamp.classList.remove('active');
        whiteLamp.classList.add('hidden');

        yellowLamp.classList.remove('hidden');
        yellowLamp.classList.add('active');

        offOnButton.textContent = 'Spegni';
        offOnButton.style.backgroundColor = 'orange';
        body.classList.add('background-light');

    } else {

        whiteLamp.classList.remove('hidden');
        whiteLamp.classList.add('active');

        yellowLamp.classList.remove('active');
        yellowLamp.classList.add('hidden');

        offOnButton.textContent = 'Accendi';
        offOnButton.style.backgroundColor = '';
        body.classList.remove('background-light');

    }

})