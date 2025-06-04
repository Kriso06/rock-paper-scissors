let score=JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};

function game(player){
    let comp='';
    let random=Math.random();
    if(random>=0 && random<1/3) {comp='Rock';}
    else if(random>=1/3 && random<2/3) {comp='Paper';}
    else {comp='Scissors';}
    res='';
    if(player===comp) {
        res='Tie.';
        score.ties++;
    }else if((player==='Rock' && comp==='Scissors')||(player==='Scissors' && comp==='Paper')||(player==='Paper' && comp==='Rock')){
        res='You Won.';
        score.wins++;
    } 
    else{
        res='Computer Won.';
        score.losses++;
    } 

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-move').innerHTML=`You picked ${player}. Computer picked ${comp}.`;
    document.querySelector('.js-who-won').innerHTML=`${res}`;
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}



