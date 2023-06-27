function specialNumbers(input) {
    let num = Number(input[0]);
    let specialNumbers = "";
    for (let i = 1111; i < 10000; i++) {
        let isSpecial = true;
        for (let j = 0; j < 4; j++) {
            if (num % Number(i.toString()[j]) !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            specialNumbers += `${i} `;
        }
    }
    console.log(specialNumbers);
}
// Да се напише програма, която чете едно цяло число N, въведено от потребителя, и генерира всички възможни "специални" числа от 1111 до 9999. За да бъде "специално"
//  едно число, то трябва да отговаря на следното условие:

// · N да се дели на всяка една от неговите цифри без остатък.

// Пример: при N = 16, 2418 е специално число:

// · 16 / 2 = 8 без остатък

// · 16 / 4 = 4 без остатък

// · 16 / 1 = 16 без остатък

// · 16 / 8 = 2 без остатък
specialNumbers (["3"])