function convertMinutes(minutes) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  return minutes + " minutes = " + hours + " hour(s) and " + remainingMinutes + " minute(s).";
}

console.log(convertMinutes(200));  

