//                  DESAFIO FATAL


// criar elemento img com src vazio drento da jankenwinner

// criar uma função para mudar imagens com o nome que quiser
    // a função recebe um argumento won para saber quem ganhou
    // fazer ifs para condição que cpu, player e draw na won
    // dependendo do resultado, mudar imagens

// chamar a função criada dentro do janken

// usar a função gameOverColors de exemplo

// apagar comentários

// criar branch

// criar PR

// mudar o board pra done só depois que a pull request estiver ok

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
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        boxJankenWinner.textContent = 'YOU WON'
        gameOverColors('PLAYER')
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        boxJankenWinner.textContent = 'YOU WON'
        gameOverColors('PLAYER')
    }
    else if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
        boxJankenWinner.textContent = 'YOU LOST'
        gameOverColors('CPU')
    }
    else {
        boxJankenWinner.textContent = 'DRAW!'
        gameOverColors('DRAW')
    }
}
