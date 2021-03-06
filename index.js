document.getElementById("rock").onclick = function (e) {
    currentPlayer = "rock";
    img = document.getElementById("selectionImg")
    img.src = "https://thumbs.dreamstime.com/b/digital-illustration-cartoon-rock-cartoon-rock-wants-kiss-118558091.jpg"
    document.getElementById("roundWinner").innerHTML = game()
    document.getElementById("scoreBoard").innerHTML = displayBoard()
}
document.getElementById("paper").onclick = function (e) {
    currentPlayer = "paper"
    img = document.getElementById("selectionImg")
    img.src = "https://thumbs.dreamstime.com/b/creative-sticker-cute-cartoon-shocked-paper-document-original-150980100.jpg"
    document.getElementById("roundWinner").innerHTML = game()
    document.getElementById("scoreBoard").innerHTML = displayBoard()

}

document.getElementById("scissors").onclick = function (e) {
    currentPlayer = "scissors"
    img = document.getElementById("selectionImg")
    img.src = "https://www.seekpng.com/png/detail/86-869321_yellow-clipart-scissors-cute-scissors-clipart-free.png"
    document.getElementById("roundWinner").innerHTML = game()
    document.getElementById("scoreBoard").innerHTML = displayBoard()
}

let tie = 0
let playerScore = 0
let computerScore = 0

function game() {
    const choice = ["rock", "paper", "scissors"]
    // computer random choice
    let computerPlay = choice[Math.floor(Math.random() * choice.length)]
    
    if (currentPlayer === "rock" && computerPlay==="rock") {
        img = document.getElementById("computerImg")
    img.src = "https://thumbs.dreamstime.com/b/digital-illustration-cartoon-rock-cartoon-rock-wants-kiss-118558091.jpg"
        ++tie
        return ("It is a tie!");
    }

    else if (currentPlayer === "paper" && computerPlay==="paper") {
        img = document.getElementById("computerImg")
    img.src = "https://thumbs.dreamstime.com/b/creative-sticker-cute-cartoon-shocked-paper-document-original-150980100.jpg"
        ++tie
        return ("It is a tie!");
    }

    else if (currentPlayer === "scissors" && computerPlay==="scissors") {
        img = document.getElementById("computerImg")
    img.src = "https://www.seekpng.com/png/detail/86-869321_yellow-clipart-scissors-cute-scissors-clipart-free.png"
        ++tie
        return ("It is a tie!");
    }
    
    else if (computerPlay === "rock" && currentPlayer === "paper") {
        img = document.getElementById("computerImg")
        img.src = "https://thumbs.dreamstime.com/b/digital-illustration-cartoon-rock-cartoon-rock-wants-kiss-118558091.jpg"
        ++playerScore
        return ("Paper beats Rock. You win !");
    }
    else if (computerPlay === "paper" && currentPlayer === "rock") {
        img = document.getElementById("computerImg")
        img.src = "https://thumbs.dreamstime.com/b/creative-sticker-cute-cartoon-shocked-paper-document-original-150980100.jpg"
        ++computerScore
        return ("Paper beats Rock. You lost.");

    }
    else if (computerPlay === "paper" && currentPlayer === "scissors") {
        img = document.getElementById("computerImg")
        img.src = "https://thumbs.dreamstime.com/b/creative-sticker-cute-cartoon-shocked-paper-document-original-150980100.jpg"
        ++playerScore
        return ("Scissors beats Paper. You win!");
    }
    else if (computerPlay === "scissors" && currentPlayer === "paper") {
        img = document.getElementById("computerImg")
        img.src = "https://www.seekpng.com/png/detail/86-869321_yellow-clipart-scissors-cute-scissors-clipart-free.png"
        ++computerScore
        return ("Scissors beats Paper. You lost.");

    }
    else if (computerPlay === "scissors" && currentPlayer === "rock") {
        img = document.getElementById("computerImg")
        img.src = "https://www.seekpng.com/png/detail/86-869321_yellow-clipart-scissors-cute-scissors-clipart-free.png"
        ++playerScore
        return ("Rock beats Scissors. You win!");

    }
    else if (computerPlay === "rock" && currentPlayer === "scissors") {
        img = document.getElementById("computerImg")
        img.src = "https://thumbs.dreamstime.com/b/digital-illustration-cartoon-rock-cartoon-rock-wants-kiss-118558091.jpg"
        ++computerScore
        return ("Rock beats Scissors. You lost.")
    }
}

function displayBoard() {

    if (playerScore < 5 && computerScore < 5 && tie < 5) {
        return ("Your Score: " + playerScore + "\n"
            + "Computer Score:" + computerScore + "\n"
            + "You have tied:" + tie)
    }

    else if (playerScore===5) {
        return(" You are the overall Winner!<br>Refresh Page")
        
    }

    else if (computerScore===5) {
       return ("AI will take over the world.<br>Refresh Page")
     
    }

    else if (tie ===5) {
        return ("It's a Tie.<br>Refresh page")
         
    }

}

