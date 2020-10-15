const jankenOptions = ['ROCK', 'PAPER', 'SCISSORS']

const buttons = document.querySelectorAll('.box-janken-player button')

buttons.forEach((button) => {
	button.addEventListener('click', () => {
        janken(playerChoice(button.textContent.trim()), computerChoice())
    })
})

const computerChoice = () => {
    const number = Math.floor(Math.random() * 3)

    return jankenOptions[number]
}

const playerChoice = (choice) => {
    return jankenOptions.find((item) => item === choice)
}

const changeImage = (won) => {
    if (won.toUpperCase() === 'PLAYER') {
        const jankenChangeImg = document.querySelector('.box-janken-winner img').src = 'jankenFotos/win.jpg'
        
    } else if (won.toUpperCase() === 'CPU') {
        const jankenChangeImg = document.querySelector('.box-janken-winner img').src = 'jankenFotos/loss.jpg'

    } else {
        const jankenChangeImg = document.querySelector('.box-janken-winner img').src = 'jankenFotos/draw.png'
    }
}

const gameOverColors = (won) => {
    if (won.toUpperCase() === 'PLAYER') {
        const boxJankenComputer = document.querySelector('.box-janken-computer h2')
        boxJankenComputer.style.color = 'red'
        const boxJankenWinner = document.querySelector('.box-janken-winner h2')
        boxJankenWinner.style.color = 'green'
    } else if (won.toUpperCase() === 'CPU') {
        const boxJankenComputer = document.querySelector('.box-janken-computer h2')
        boxJankenComputer.style.color = 'green'
        const boxJankenWinner = document.querySelector('.box-janken-winner h2')
        boxJankenWinner.style.color = 'red'
    } else {
        const boxJankenComputer = document.querySelector('.box-janken-computer h2')
        boxJankenComputer.style.color = 'white'
        const boxJankenWinner = document.querySelector('.box-janken-winner h2')
        boxJankenWinner.style.color = 'white'
    }
} 

const janken = (playerChoice, computerChoice) => {
    const boxJankenComputer = document.querySelector('.box-janken-computer h2')
    boxJankenComputer.textContent = computerChoice    
    
    const boxJankenWinner = document.querySelector('.box-janken-winner h2')

    if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        boxJankenWinner.textContent = 'YOU WON!'
        gameOverColors('PLAYER')
        changeImage('PLAYER')        
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
        changeImage('CPU')
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        boxJankenWinner.textContent = 'YOU WON'
        gameOverColors('PLAYER')
        changeImage('PLAYER')
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
        changeImage('CPU')
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        boxJankenWinner.textContent = 'YOU WON'
        gameOverColors('PLAYER')
        changeImage('PLAYER') 
    }
    else if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
        changeImage('CPU')
    }
    else {
        boxJankenWinner.textContent = 'DRAW!'
        gameOverColors('DRAW')
        changeImage('DRAW')
    }
}
