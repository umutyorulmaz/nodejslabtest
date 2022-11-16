import ProgressBar from "progress";
import chalk from "chalk";

console.log(chalk.green("Downloaded --> Started"))
var bar = new ProgressBar(':bar :percent :eta ' , { width:20,total: 100  });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log(chalk.green('Downloaded --> Completed'));
    clearInterval(timer);
  }
}, 500);

export default bar;