//You are starting a landscaping business, but all you have are your teeth.

let money;
const toolbox = [];
let tool;

const start = () => {
    tool = "teeth"
    toolbox.push(tool)
    money = 0;
    showStatus()
    askForAction();
}

const showStatus = () => {
    alert("You have $" + money + " and you are using " + tool + " to cut grass.")
}

const work = () => {
    //Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
    if (tool === "teeth") {
        money = money + 1;
        alert("You made $1! Now you have $" + money)
        askForAction()
    } else if (tool === "scissors") { //Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
        money = money + 5
        alert("You made $5! Now you have $" + money)
        askForAction()
    } else if (tool === "lawnmower") {//Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
        money = money + 50
        alert("You made $5! Now you have $" + money)
        askForAction()
    } else if (tool === "Fancy Lawnmower") {//Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
        money = money + 100
        alert("You made $5! Now you have $" + money)
        askForAction()
    } else if (tool === "students") {//Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
        money = money + 250
        alert("You made $5! Now you have $" + money)
        askForAction()
    } else if (toolbox.includes("students") && money >= 1000) {//You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
        alert("You Win!")
    }
}

//At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
const buyScissors = () => {
    if (money >= 5 && !toolbox.includes("scissors")) {
        toolbox.push("scissors")
        tool = "scissors"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
const buyLawnmower = () => {
    if (money >= 25 && !toolbox.includes("lawnmower")) {
        toolbox.push("lawnmower")
        tool = "lawnmower"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
const buyFancyLawnmower = () => {
    if (money >= 250 && !toolbox.includes("Fancy Lawnmower")) {
        toolbox.push("Fancy Lawnmower")
        tool = "Fancy Lawnmower"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

//At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
const hireStudents = () => {
    if (money >= 500 && !toolbox.includes("students")) {
        toolbox.push("students")
        tool = "students"
    } else {
        console.log("Sorry you don't have enough money or experience")
    }
    askForAction();
}

const shop = () => {
    if (tool === "teeth") {
        buyScissors()
    } else if (tool === "scissors") {
        buyLawnmower()
    } else if (tool === "lawnmower") {
        buyFancyLawnmower()
    } else if (tool === "Fancy Lawnmower") {
        hireStudents()
    } else if (toolbox.includes("students") && money > 1000) {
        console.log("keep working")
        askForAction()
    } else if (toolbox.includes("students") && money >= 1000) {
        console.log("You win!")
    }
}

const askForAction = () => {
    const choice = prompt("What do you want to do?", "shop / work / restart");
    if (choice === "shop") {
        shop()
        showStatus()
    } else if (choice === "work") {
        work()
        showStatus()
    } else if (choice === "restart") {
        start()
    }
}

alert('Welcome to the landscaper game');
start()
askForAction()