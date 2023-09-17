function solve(progress) {
  const percentage = progress + "%";
  const barLength = progress / 10;
  const bar = `[${"%".repeat(barLength)}${".".repeat(10 - barLength)}]`;

  console.log(percentage, bar);

  if (progress < 100) {
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
  }
}
solve(30)