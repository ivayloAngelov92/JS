// function sortArray(array, order){
//     order==='asc'? array.sort((a,b)=>a-b):array.sort((a,b)=>b-a)
//     return array
// }


// return arr.sort((a, b) => (type === "asc" ? a - b : b - a));


function sortArray(arr, type) {
    
    const methods = {               // Създаваме обект с двата метода за сортиране 
        asc: (a, b) => a - b,       // Той има метод asc, който сортира по възходящ ред 
        desc: (a, b) => b - a,      // Той има метод desc, който сортира по низходящ ред 
    };

    arr.sort(methods[type]);        // Викаме метода sort върхи масива като подаваме от метода, типа на сравняване 

    return arr;                     // Връщаме сортирания масив 
}

sortArray([14, 7, 17, 6, 8], 'desc')