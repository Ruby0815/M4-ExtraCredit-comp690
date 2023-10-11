let miles;
let gallons;
let mpg;
let again = 'y';
do {
    miles = parseFloat(prompt('Enter the miles driven.'));
    gallons = parseFloat(prompt('Enter the no of gallons fuel  tank  holds.'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`your car gets: ${mpg.toFixed(2)} miles to the gallons.`)

    } else {
       alert(`one or both entries is invalid.`);
    }
   
    again = prompt('Run application again ?(y/n','y')

   while(again !== 'y'&& again !=='n'){
    alert('Enter only y or n')
    again = prompt('Run application again ?(y/n','y')

  }
    }
while (again === 'y')

console.log("The program has been terminated.")