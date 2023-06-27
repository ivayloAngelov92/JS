function solve(input) {
    let n = Number(input[0])
    let index = 1;
    let command = input[index]
    let subjectCount = 0
    let avgGradeSum=0
    
    while (command !== "Finish") {
        let subject = command;
        let grade = 0
        
        subjectCount++
        for (i = 0; i < n; i++) {
            index++
            grade += Number(input[index])
        }
        let avgGrade = (grade / n)
        avgGradeSum+=Number(avgGrade)
        console.log(`${subject} - ${avgGrade.toFixed(2)}.`);
        index++
        command = input[index]
    }

    console.log(`Student's final assessment is ${(avgGradeSum/subjectCount).toFixed(2)}.`);

}


// Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито, което ще оценява презентациите, като напишете функция,
//  която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.

// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]

// След това името на презентацията - текст

// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]

// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата

// "{името на презентацията} - {средна оценка}."

// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.

// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.
solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])