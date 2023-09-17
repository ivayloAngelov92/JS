class Cat{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    meow(){console.log(`${this.name}, age ${this.age} says Meow`)}
}

function createCats (arr){
    let cats = [];
    arr.forEach(cat=>{
        let[name, age] =cat.split(' ')
        cats.push(new Cat(name, age))
    })
    cats.forEach(cat=>{
        cat.meow()
    })
}

createCats(['Mellow 2', 'Tom 5']
)