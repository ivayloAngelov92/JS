function add(number){
    let inner=function(a){
        number+=a
        return inner
    }
    inner.toString=function(){
        return number
    }
    return inner
}

console.log(add(1));
console.log(add(1)(6)(-3));