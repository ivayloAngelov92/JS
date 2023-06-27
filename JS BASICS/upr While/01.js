function solve(input){
    let index= 0;
    let wantedBook= input[index];
    index++;
    let command= input[index];
    

    let booksChecked=0
    while(command !=="No More Books"){
        if(command === wantedBook){
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        }
        booksChecked++;
        index++;
        command= input[index];
       
    }
    
    console.log("The book you search is not here!");
    console.log(`You checked ${booksChecked} books.`);

}

solve (["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])