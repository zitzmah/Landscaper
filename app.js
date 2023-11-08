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