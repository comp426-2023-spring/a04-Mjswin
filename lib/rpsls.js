export function rps(shot) {
    const plays = ["rock", "paper", "scissors"];
    if (shot == null) {
        return {"player": plays[Math.floor(Math.random()*plays.length)]};
    }
    shot = shot.tolowerCase();
    const opponent = plays[Math.floor(Math.random()*plays.length)];
    var result;
    if (shot === "rock") {
        if (opponent === "rock") {
            result = "tie";
        }
        else if (opponent === "paper") {
            result = "lose";
        }
        else if (opponent === "scissors") {
            result = "win";
        }
    }
    else if (shot === "paper") {
        if (opponent === "rock") {
            result = "win";
        }
        else if (opponent === "paper") {
            result = "tie";
        }
        else if (opponent === "scissors") {
            result = "lose";
        }
    }
    else if (shot === "scissors") {
        if (opponent === "rock") {
            result = "lose";
        }
        else if (opponent === "paper") {
            result = "win";
        }
        else if (opponent === "scissors") {
            result = "tie";
        }
    } else {
        console.log("Out of range");
        console.error();
    }
    return {"player": shot, "opponent": opponent, "result": result};
}

export function rpsls(shot) {
    const plays = ["rock", "paper", "scissors", "lizard", "spock"];
    if (shot == null) {
        return {"player": plays[Math.floor(Math.random()*plays.length)]};
    }
    shot = shot.tolowerCase();
    const opponent = plays[Math.floor(Math.random()*plays.length)];
    var result;
    if (shot === "rock") {
        if (opponent === "scissors" || opponent === "lizard") {
            result = "win";
        }
        else if (opponent === "paper" || opponent === "spock") {
            result = "lose";
        }
        else if (opponent === "rock") {
            result = "tie";
        }
    }
    else if (shot === "paper") {
        if (opponent === "rock" || opponent === "spock") {
            result = "win";
        }
        else if (opponent === "scissors" || opponent === "lizard") {
            result = "lose";
        }
        else if (opponent === "paper") {
            result = "tie";
        }
    }
    else if (shot === "scissors") {
        if (opponent === "paper" || opponent === "lizard") {
            result = "win";
        }
        else if (opponent === "rock" || opponent === "spock") {
            result = "lose";
        }
        else if (opponent === "scissors") {
            result = "tie";
        }
    }
    else if (shot === "lizard") {
        if (opponent === "spock" || opponent === "paper") {
            result = "win";
        }
        else if (opponent === "rock" || opponent === "scissors") {
            result = "lose";
        }
        else if (opponent === "lizard") {
            result = "tie";
        }
    }
    else if (shot === "spock") {
        if (opponent === "rock" || opponent === "scissors") {
            result = "win";
        }
        else if (opponent === "paper" || opponent === "lizard") {
            result = "lose";
        }
        else if (opponent === "spock") {
            result = "tie";
        }
    }   
    else {
        console.log("Out of range");
        console.error();
    }
    return {"player": shot, "opponent": opponent, "result": result};
}