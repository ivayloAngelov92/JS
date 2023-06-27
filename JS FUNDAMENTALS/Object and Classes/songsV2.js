function solve(array) {
    class Songs {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }
    let songsNumber=array.shift()
    let typeSong=array.pop()
    for(let i=0 ;i<songsNumber;i++){
        let [type, name, time]= array[i].split('_')
        let song=new Songs(type,name,time)
        if(typeSong==='all'|| song.type===typeSong){
            console.log(song.name);
        }
    }
}
solve([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])