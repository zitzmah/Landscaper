//You are starting a landscaping business, but all you have are your teeth.

let money;
const toolbox = [];
let tool;

const start = () => {
    tool = "teeth"
    toolbox.push(tool)
    money = 20;
    askForAction();
}

const showStatus = () => {
    alert("You have $" + money + " and have worked " + day + " days")
}

const askForAction = () => {
    showStatus();
    const choice = prompt("What do you want to do?", "shop / work / restart");
    if (choice === "shop") {
        
    } else if (choice === "work") {
        work()
    } else if (choice === "restart") {
        start()
    }
}

const work = () => {
    //Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
    if (tool === "teeth") {
        money = money + 1;
        console.log("You made $1!")
    } else if (tool === "scissors") { //Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
        money = money + 5
        console.log("You made $5!")
    } else if (tool === "lawnmower") {//Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
        money = money + 50
        console.log("You made $50!")
    } else if (tool === "Fancy Lawnmower") {//Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
        money = money + 100
        console.log("You made $100!")
    } else if (tool === "students") {//Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
        money = money + 250
        console.log("You made $250!")
    } else if (toolbox.includes("students") && money >= 1000) {//You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
        console.log("You Win!")
    }
}

//At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
const buyScissors = () => {
    if (tool === "teeth" && money >= 5 && !toolbox.includes("scissors")) {
        toolbox.push("scissors")
        tool = "scissors"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
const buyLawnmower = () => {
    if (tool === "scissors" && money >= 25 && !toolbox.includes("lawnmower")) {
        toolbox.push("lawnmower")
        tool = "lawnmower"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
const buyFancyLawnmower = () => {
    if (tool === "lawnmower" && money >= 250 && !toolbox.includes("Fancy Lawnmower")) {
        toolbox.push("Fancy Lawnmower")
        tool = "Fancy Lawnmower"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
const hireStudents = () => {
    if (tool === "Fancy Lawnmower" && money >= 500 && !toolbox.includes("students")) {
        toolbox.push("students")
        tool = "students"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}