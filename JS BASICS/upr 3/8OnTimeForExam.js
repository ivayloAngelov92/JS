function solve(input) {
    let examHours = Number(input[0])
    let examMin = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMin = Number(input[3])

    let totalExamMins = (examHours * 60) + examMin
    let totalArrivalMins = (arrivalHour * 60) + arrivalMin

    let totalMinsDiff = Math.abs(totalExamMins - totalArrivalMins)
    let hoursDiff = Math.floor(totalMinsDiff / 60)
    let minsDiff = totalMinsDiff % 60

    let timeDiff = ""

    if (hoursDiff > 0) {
        if (minsDiff < 10) {
            timeDiff = `${hoursDiff}:0${minsDiff}`
        } else {
            timeDiff = `${hoursDiff}:${minsDiff}`
        }
    } else {
        timeDiff = minsDiff
    }

    if (totalArrivalMins < totalExamMins) {
        if (totalMinsDiff <= 30) {
            console.log(`On Time`);
            console.log(`${timeDiff} minutes before the start`);
        } else {
            console.log("Early");
            if (totalMinsDiff < 60) {
                console.log(`${timeDiff} minutes before the start`);
            } else {
                console.log(`${timeDiff} hours before the start`);
            }
        }
    } else if (totalArrivalMins > totalExamMins) {
        console.log(`Late`);

        if (totalMinsDiff < 60) {
            console.log(`${timeDiff} minutes after the start`);
        } else {
            console.log(`${timeDiff} hours after the start`);
        }
    } else {
        console.log(`On time`);
    }
}

// На първият ред отпечатайте:
// ⦁	"Late", ако студентът пристига по-късно от часа на изпита.
// ⦁	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// ⦁	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
// Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
// ⦁	"mm minutes before the start" за идване по-рано с по-малко от 1.
// ⦁	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
// ⦁	 "mm minutes after the start" за закъснение под час.
// ⦁	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

solve(["9",
    "30",
    "9",
    "50"])