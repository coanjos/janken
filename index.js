const jankenOptions = ['ROCK', 'PAPER', 'SCISSORS']

const buttons = document.querySelectorAll('.box-janken-player div')

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

const janken = (playerChoice, computerChoice) => {
    const boxJankenComputer = document.querySelector('.box-janken-computer h2')
    boxJankenComputer.textContent = computerChoice
    
    const boxJankenWinner = document.querySelector('.box-janken-winner h2')

    if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        boxJankenWinner.textContent = 'YOU WON!'
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        boxJankenWinner.textContent = 'YOU LOST'
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        boxJankenWinner.textContent = 'YOU WON'
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        boxJankenWinner.textContent = 'YOU LOST'
    }
    else {
        boxJankenWinner.textContent = 'DRAW!'
    }
}
