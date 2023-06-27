function solve(input){
    let width= Number(input[0])
    let leng = Number(input[1])
    let hight= Number(input[2])
    let index=3
    let totalSpace= width*leng*hight
    let spaceTaken=0

     let command= input[index]
    while (command !== "Done"){
        let spacePerItem= Number(command)
        spaceTaken+=spacePerItem;

        if (totalSpace<spaceTaken){
            console.log(`No more free space! You need ${spaceTaken-totalSpace} Cubic meters more.`);
            return;
        
        }

        index++
        command=input[index]
    }
    console.log(`${totalSpace - spaceTaken} Cubic meters left.`);
}

solve (["10",

"1",

"2",

"4",

"6",

"Done"])