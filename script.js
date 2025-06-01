let comp='';
function compMove(){
    let random=Math.random();
    if(random>=0 && random<1/3) {comp='Rock';}
    else if(random>=1/3 && random<2/3) {comp='Paper';}
    else {comp='Scissors';}
    console.log(comp);
}

let res='';
function rock(){
    if(comp==='Rock') res='Tie.';
    else if(comp==='Paper') res='Computer Won.';
    else res='You Won.';
    alert(res);
}

function paper(){
    if(comp==='Rock') res='You Won.';
    else if(comp==='Paper') res='Tie.';
    else res='Computer Won.';
    alert(res);
}
function scissors(){
    if(comp==='Rock') res='Computer Won.';
    else if(comp==='Paper') res='You Won.';
    else res='Tie.';
    alert(res);
}



