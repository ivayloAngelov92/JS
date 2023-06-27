// една или повече повторения
//+

// 0 или повече
//*
// да не мачва !
//[^abc];

let text = 'If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included. If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).'
// Regexp literal
let pattern = /\w+\(\)/;

// regExp construcor
let regExp = new RegExp('\w+\(\)', 'g')

// regExp Methods
let hasMatches = pattern.test(text)

let matches = regExp.exec(text)
while(matches){
    console.log(`Found ${matches[0]} on index ${matches.index}`);
    matches= pattern.exec(text)
}
// string Methods


console.log(test);