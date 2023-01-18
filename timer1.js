const args = process.argv.slice(2);
let sorting = (array) => {
  let newArray = [];
  for (let elem of array) {
    if (elem > 0 && Number.isNaN(elem) === false) {
      newArray.push(elem);
    }
  }
  return newArray.sort((a, b) => a - b);
};
let sortedArgs = sorting(args);

for (let elem of sortedArgs) {
  if (elem === undefined) {
    process.exit();
  } else {
    setTimeout(() => {
      process.stdout.write(elem + "\n");
      process.stderr.write("\007");
    }, elem * 1000);
  }
}