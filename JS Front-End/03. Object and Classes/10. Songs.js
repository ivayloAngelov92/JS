function songs(arr){
    const numberOfSongs = arr.shift()
    const typeList = arr.pop()
    let playlist=[]
    class Songs{
        constructor(type, name, time){
            this.type = type,
            this.name = name,
            this.time = time
        }
    }
    arr.forEach(song=>{
        let [type, name, time] = song.split('_')
        if (type==typeList|| typeList=='all'){
            playlist.push(name)
        }
    })
    playlist.forEach(song=>console.log(song))
}

songs ([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )