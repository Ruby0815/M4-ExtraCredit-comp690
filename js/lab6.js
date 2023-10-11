let futureValue;
let investment, rate, years;

investment = parseFloat(prompt("How much do you want to invest? (xxxx.xx)"));

while (isNaN(investment)) {
    alert("Enter only numeric value");
    investment = parseFloat(prompt("How much do you want to invest? (xxxx.xx)"));
}

rate = parseFloat(prompt("Enter interest rate as xx.x"));

while (isNaN(rate) || rate <= 0 || rate > 20) {
    alert("Enter a valid interest rate between 0 and 20");
    rate = parseFloat(prompt("Enter interest rate as xx.x"));
}

years = parseInt(prompt("Enter the number of years you want to invest for"));

while (isNaN(years) || years < 1 || years > 30) {
    alert("Enter a valid number of years between 1 and 30");
    years = parseInt(prompt("Enter the number of years you want to invest for"));
}

futureValue = investment;

for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years} years<br>`);
document.write(`Future amount: $${futureValue.toFixed(2)}`);
