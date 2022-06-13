/* You have to generate a calculator layout with a display on top and all the digits buttons (0 to 9),
the operation buttons (+, -, x, /), a button to calculate the result (=) and a button to clear the display (C)*/

const main = document.querySelector('main');

const AC = document.createElement('button');
AC.textContent = 'AC';
AC.classList.add('span-2');
main.appendChild(AC);

const DEL = document.createElement('button');
DEL.textContent = 'DEL';
main.appendChild(DEL);

const divide = document.createElement('button');
divide.textContent = '÷';
main.appendChild(divide);

for (let i = 1; i < 10; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('digit');
    main.appendChild(button);
}

for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.textContent = ['-', '.', '0'][i];
    button.classList.add('operation');
    main.appendChild(button);
}

const equal = document.createElement('button');
equal.textContent = '=';
equal.classList.add('span-2');
main.appendChild(equal);