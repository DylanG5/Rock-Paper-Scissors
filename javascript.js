function computerPlay(){
    let num=Math.floor(Math.random()*3);
    if (num==0){
        return "rock"
    }

    else if (num==1){
        return "paper"
    }

    else{
        return "scissors"
    }

}

function play(pSelec, cSelec){
    pSelec=pSelec.toLowerCase()
    console.log(pSelec+" "+cSelec)
    if (pSelec=="rock"){

        if (cSelec=="paper"){
            console.log("You lose! computer had paper!")
            return -1;
        }
        else if(cSelec=="scissors"){
            console.log("You win! computer had scissors")
            return 1;
        }
        else{
            console.log("It's a tie")
            return 0;
        }
    }

    else if(pSelec=="paper"){
        if (cSelec=="scissors"){
            console.log("You lose! computer had scissors!")
            return -1;
        }
        else if(cSelec=="rock"){
            console.log("You win! computer had rock")
            return 1;
        }
        else{
            console.log("It's a tie")
            return 0;
        }
    }

    else{
        if (cSelec=="rock"){
            console.log("You lose! computer had rock!")
            return -1;
        }
        else if(cSelec=="paper"){
            console.log("You win! computer had paper")
            return 1;
        }
        else{
            console.log("It's a tie")
            return 0;
        }
    }
}

function game(){
    let pSelec;
    let winner;
    let pScore=0;
    let cScore=0;
    for(let i=0; i<5; i++){
        pSelec=prompt("Enter your choice ")
        winner=play(pSelec, computerPlay())
        if (winner==1){
            pScore++;
        }

        else if (winner==-1){
            cScore++
        }

        else{
            cScore++
            pScore++
        }
    }
    console.log("the final socre was: ",pScore,"-",cScore)

}
game()