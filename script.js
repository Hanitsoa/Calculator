let elementScreen = '0';
let total = 0;
let buttonSymbol;

const screen = document.querySelector('.screen');

function calculate () {
    document.querySelector('.buttons').addEventListener('click', function (event) {
        buttonClick (event.target.innerText);
    })
}
calculate ();

// Récupération valeur button
function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
        }
    screen.innerText = elementScreen;
}

// Affichage number
function handleNumber(numberString) {
    if (elementScreen === '0') {
        elementScreen = numberString;
    } else {
        elementScreen += numberString;
        }
}

// Détection Symbol
function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            elementScreen = '0';
            break;
        case '←':
            if (elementScreen.length === 1) {
                elementScreen = '0';
            } else {
                elementScreen = elementScreen.substring(0, elementScreen.length - 1);
                }
            break;
        case '=':
            operationSymbol (parseInt(elementScreen));
            buttonSymbol = null;
            elementScreen = total;
            total = 0;
            break;
        case '*':
            handleMath (symbol);
            break;
        case '+':
            handleMath (symbol);
            break;
        case '÷':
            handleMath (symbol);
            break;
        case '-':
            handleMath (symbol);
            break;
    }
}

// Affichage résultat
function handleMath (symbol) {
    const intElementScreen = parseInt(elementScreen);
    if (total === 0) {
        total = intElementScreen;
    } else {
        operationSymbol (intElementScreen)
    }
    buttonSymbol = symbol;
    elementScreen = '0';
}

// Choix de l'opération
function operationSymbol (intElementScreen) {
    if (buttonSymbol === '*') {
        total *= intElementScreen;
    } else if (buttonSymbol === '-') {
        total -= intElementScreen;
    } else if (buttonSymbol === '+') {
        total += intElementScreen;
    } else if (buttonSymbol === '÷') {
        total /= intElementScreen;
    }
}

