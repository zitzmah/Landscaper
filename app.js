console.log("Hello")

//You are starting a landscaping business, but all you have are your teeth.
let day = 0;
let money = 0;
const toolbox = ["teeth"]
let tool = "teeth"

//Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
if (tool === "teeth") {
    money = money + day;
}

//At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
if (tool === "teeth" && money >= 5 && !toolbox.includes("scissors")) {
    toolbox.push("scissors")
}

//Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
if (tool === "scissors") {
    money = money + (day * 5)
}

//At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
if (tool === "scissors" && money >= 25 && !toolbox.includes("lawnmower")) {
    toolbox.push("lawnmower")
}

//Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
if (tool === "lawnmower") {
    money = money + (day * 50)
}

//At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
if (tool === "lawnmower" && money >= 250 && !toolbox.includes("fancyLawnmower")) {
    toolbox.push("fancyLawnmower")
}

//Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
if (tool === "fancyLawnmower") {
    money = money + (day * 100)
}

//At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
if (tool === "fancyLawnmower" && money >= 500 && !toolbox.includes("students")) {
    toolbox.push("students")
}

//Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
if (tool === "students") {
    money = money + (day * 250)
}

//You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
if (toolbox.includes("students") && money === 1000) {
    console.log("You Win!")
}