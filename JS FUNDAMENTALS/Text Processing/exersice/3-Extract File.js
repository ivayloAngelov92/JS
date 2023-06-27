function solve (input){
    let arrray=input.split('\\')
    let file=arrray.pop()
    let lastComa=file.lastIndexOf('.')
    let fileName=file.substring(0,lastComa)
    let extension=file.substring(lastComa+1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
        // let pathArray = path.split('\\');
        // let filename = pathArray.pop().split('.');
        // let extension = filename.pop();
        // console.log(`File name: ${filename.join('.')}`);
        // console.log(`File extension: ${extension}`);
    
}

solve ('C:\\Internal\\training-internal\\Template.bat.pptx')