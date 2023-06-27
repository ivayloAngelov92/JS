function solve(a,b,c){
    let biggestNum=0
    let middleNum=0
    let lowestNum=0

    if(a>=b&&b>=c){
        biggestNum=a
        middleNum=b
        lowestNum=c
    }else if(a>=c&&c>=b){
        biggestNum=a
        middleNum=c
        lowestNum=b
    }else if(b>=a&&a>=c){
        biggestNum=b
        middleNum=a
        lowestNum=c
    }else if(b>=c&& c>=a){
        biggestNum=b
        middleNum=c
        lowestNum=a
    }else if(c>=a&&a>=b){
        biggestNum=c
        middleNum=a
        lowestNum=b
    }else if(c>=b&&b>=a){
        biggestNum=c
        middleNum=b
        lowestNum=a
    }
    console.log(biggestNum);
    console.log(middleNum);
    console.log(lowestNum);
}

solve (0,0,2)