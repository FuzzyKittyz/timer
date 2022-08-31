const argArray = process.argv.slice(2);

if (argArray.length === 0) {
  console.log("No time given");
  return;
}

for (const arg of argArray) {
  if (Number.isInteger(Number(arg))){
    if (Number(arg) < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(arg) * 1000)
  }
};