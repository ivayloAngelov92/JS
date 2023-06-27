function solution(){
    let string=''
    function append(str){
        string+=str
    }
    function print(){
        console.log(string);
    }
    function removeStart(index){
        string=string.slice(index)
    }
    function removeEnd(index){
        string=string.slice(0,-index)
    }
    return {
        append,
        print,
        removeStart,
        removeEnd
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
