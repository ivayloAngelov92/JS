function solve(char1, char2) {
    let startCode = char1.charCodeAt(0);
    let endCode = char2.charCodeAt(0);
    let result = [];
    for(let i=Math.min(startCode, endCode)+1; i<Math.max(startCode,endCode);i++){
        let char=String.fromCharCode(i)
        result.push(char)
    }
    console.log(result.join(' '));
  }

solve ('#',
':')