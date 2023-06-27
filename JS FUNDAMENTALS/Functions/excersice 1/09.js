function loadingBar(num) {
    let percentCount = '%'.repeat(num / 10)
    let dotCount = ".".repeat(10 - (num / 10))
    if (num === 100) {
        console.log(`100% Complete!`);
    } else if (num < 100) {
        console.log(`${num}% [${percentCount}${dotCount}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30)