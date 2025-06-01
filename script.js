function game(player){
    let comp='';
    let random=Math.random();
    if(random>=0 && random<1/3) {comp='Rock';}
    else if(random>=1/3 && random<2/3) {comp='Paper';}
    else {comp='Scissors';}
    res='';
    if(player===comp) res='Tie.';
    else if((player==='Rock' && comp==='Scissors')||(player==='Scissors' && comp==='Paper')||(player==='Paper' && comp==='Rock')) res='You Won.';
    else res='Computer Won.';
    alert(res);
}



