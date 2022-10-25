// make it beep once after given time has passed
const alarm = function() {
  const array = process.argv.slice(2);
  let sortedArr = array.sort((a, b) => a - b);
  let arrLength = sortedArr.length;
  
  if (arrLength < 1) {
    return;
  }
  for (const seconds of sortedArr) {
    let delay = seconds * 1000;
    // if no numbers are provided, no beep
    // if an input is a negative number or string ignore or skip
    if (seconds < 0 || isNaN(seconds)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

alarm();