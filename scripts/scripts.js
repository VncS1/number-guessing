import Modal from './modal.js'

const modal = Modal()

const tips = document.querySelector('.tips')
const numberGuess = document.querySelector('.num-field')
const guessButton = document.querySelector('.guess-button')

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const numberType = (number) => {
    let type

    if (number % 2 == 0) {
        type = false
    } else {
        type = true
    }

    return type
}

let numberToGuess = getRandomNumber(1, 100)
console.log(numberToGuess)



const correctGuess = (numberGuess, numberToGuess) => {
    let correct
    if (numberGuess == numberToGuess) {
        correct = true
    } else {
        correct = false
    }

    return correct
}

const createTip = (tip) => {
    const newTip = document.createElement('h3')
    newTip.classList.add('tip')

    newTip.innerHTML = tip
    tips.appendChild(newTip)
}

let guessCount = 1

const tipsToHelp = (numberGuess, numberToGuess) => {

    if (correctGuess(numberGuess, numberToGuess)) {
        const text = `Parabéns! O número era ${numberToGuess}`


        modal.open()

        // createTip(text)

        // guessCount++;
    } else if (guessCount == 3) {
        const text = numberType(numberToGuess) ? `Dica ${guessCount}: Número é ímpar` : `Dica numero ${guessCount}: Número é par`

        createTip(text)

        guessCount++;
    } else if (numberGuess > numberToGuess) {
        const text = `Dica ${guessCount}: O número é menor que ${numberGuess}`
        
        createTip(text)

        guessCount++;
    } else {
        const text = `Dica ${guessCount}: O número é maior que ${numberGuess}`
        
        createTip(text)

        guessCount++
    }
}

const guessingNumber = (numberGuess, numberToGuess) => {
    console.log(numberGuess)
    if (numberGuess !== '') {
        tipsToHelp(numberGuess, numberToGuess)
    }
}

guessButton.addEventListener('click', (e) => {
    e.preventDefault()

    guessingNumber(numberGuess.value, numberToGuess)
})

