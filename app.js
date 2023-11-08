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
if (tool === scissors) {
    money = money + (day * 5)
}