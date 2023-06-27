function solve (input){
    let text = input[0].toLocaleLowerCase().split(' ')
    let namingConvention = input[1]
    let result=""
    if (namingConvention === "Camel Case") {
        result += text[0]
        for (let i = 1; i < text.length; i++) {
          result += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1)
        }
      } else if (namingConvention === 'Pascal Case') {
        for (let i = 0; i < text.length; i++) {
          result += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1)
        }
      } else {
        result = "Error!"
      }
      console.log(result);
}

solve (["this is an example", "Camel Case"])