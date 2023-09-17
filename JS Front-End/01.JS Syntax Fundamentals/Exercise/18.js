function solve(inputString) {
  // const regex = /#(\w+)/g;
  // const validSpecialWords = [];
  // let match;

  // while ((match = regex.exec(inputString)) !== null) {
  //   const word = match[1];
  //   if (/^[a-zA-Z]+$/.test(word)) {
  //     validSpecialWords.push(word);
  //   }
  // }

  // console.log(validSpecialWords.join("\n"))
  params = params.split(" ");
  for (const element of params) {
    if (
      element.startsWith("#") &&
      element.length > 1 &&
      isLettersOnly(element.substring(1))
    ) {
      let result = element.substring(1);
      console.log(result);
    }
  }
  function isLettersOnly(str) {
    return str.split("").every((char) => isLetter(char));
  }
  function isLetter(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
  }
}

solve ('Nowadays everyone uses # to tag a #spec!ial word in #socialMedia' )
