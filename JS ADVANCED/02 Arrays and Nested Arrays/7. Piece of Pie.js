function solve (array, startFlavor,endFlavor){
    return array.slice(array.indexOf(startFlavor),array.indexOf(endFlavor)+1)
}

solve (['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')