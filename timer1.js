const argArray = process.argv.slice(2);

if (argArray.length === 0) { //checks to see if the the length of the array is 0 meaning nothing is in the array
  console.log("No time given");//returns no time given since no number has been given
  return;
}

for (const arg of argArray) {
  if (Number.isInteger(Number(arg))){//checks to see if the number given is an interger 
    if (Number(arg) < 0) {//checks to see if the number is less than 0 (negative number)
      continue;//skips over the number and continues the loop
    }
    setTimeout(() => {
      console.log('BEEP'),
      process.stdout.write('\x07');//beep sound
    }, Number(arg) * 1000)// number times 1000 to account for miliseconds
  }
};