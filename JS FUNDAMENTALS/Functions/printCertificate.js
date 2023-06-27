function printCertificate(grade, arr) {

    function printHeader() {
        return (`
        ~~~-   {@}   -~~~
        ~- Certificate -~
        ~~~-  ~---~  -~~~
        `);

    }
    function getFullName(arr) {
        return `${arr[0]} ${arr[1]}`
    }

    let fullName = getFullName(arr)

    let formattedGrade = formatGrade(grade)
    printHeader()
    console.log(fullName);
    console.log(formattedGrade);
    function formatGrade(grade) {
        if (grade < 3) {
            return (`Fail (2)`);
        } else if (grade < 3.5) {
            return (`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.5) {
            return (`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.5) {
            return (`Very good (${grade.toFixed(2)})`);
        } else {
            return (`Excellent (${grade.toFixed(2)})`);
        }
    }
}
printCertificate((5.25, ['Peter', 'Carter']))
