let scoreBoard =JSON.parse(localStorage.getItem('score')) ||   {
    wins : 0,
    loses : 0,
    ties : 0
};

let isAutoplaying = false;
let intervalID;
autoplay = () => {
if(!isAutoplaying){
intervalID = setInterval(() => {
        let randomNumber = Math.random();
        let playerMove = '';
        if (randomNumber < 1/3)
            playerMove = 'Rock';
        else if ((randomNumber > 1/3) && (randomNumber < 2/3))
            playerMove = 'Paper';
        else if (randomNumber > 2/3)
            playerMove = 'Scissors';
        playGame(playerMove) 
},1000)
isAutoplaying = true;
}
else{
    clearInterval(intervalID);
    isAutoplaying = false;
}
}
function playGame(playerMove)
{
    let randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber < 1/3)
        computerMove = 'Rock';
    else if ((randomNumber > 1/3) && (randomNumber < 2/3))
        computerMove = 'Paper';
    else if (randomNumber > 2/3)
        computerMove = 'Scissors';
let result = '';
if (playerMove === 'Rock')
    if (computerMove ==='Rock')
        result = 'Game Tied.';
    else if (computerMove ==='Paper')
        result = 'You Lost!';
    else if (computerMove === 'Scissors')
        result = 'You Won!';
if (playerMove === 'Paper')
    if (computerMove ==='Rock')
        result = 'You Won!';
    else if (computerMove ==='Paper')
        result = 'Game Tied.';
    else if (computerMove === 'Scissors')
        result = 'You Lost!';
if (playerMove === 'Scissors')
    if (computerMove ==='Rock')
        result = 'You Lost!';
    else if (computerMove ==='Paper')
        result = 'You Won!';
    else if (computerMove === 'Scissors')
        result = 'Game Tied.';

if(result === 'You Won!')
    scoreBoard.wins++;
else if ( result === 'You Lost!')
    scoreBoard.loses++;
else if(result === 'Game Tied.')
    scoreBoard.ties++;
localStorage.setItem('score' , JSON.stringify(scoreBoard))
document.querySelector('.result').innerHTML = `${result}`
document.querySelector('.selection').innerHTML = ` You selected <img src="${playerMove}-emoji.png"class="imagebuttons">
       Computer selected <img src="${computerMove}-emoji.png"class="imagebuttons">`
updateScore();
};
updateScore = () => {
    document.querySelector('.score').innerHTML = `Wins = "${scoreBoard.wins}"\nLoses = "${scoreBoard.loses}"\nTies = "${scoreBoard.ties}"`
}

   