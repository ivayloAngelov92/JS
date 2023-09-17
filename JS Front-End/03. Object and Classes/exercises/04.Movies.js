function movieInfo(array){
    let movies=[]
    array.forEach(line=>{
        if(line.includes('addMovie')){
            let movieName= line.split(' ')[1]
            addMovie(movieName)
        }else if(line.includes('directedBy')){
            let [movieName,decoy, director]= line.split(' ')
            addDirector(movieName, director)
        }else if(line.includes('onDate')){
            let [movieName,decoy, date]= line.split(' ')
            addDate(movieName, date)
        }
    })
    printMovies()
    
    function addMovie(movieName){

        movies.push({
            name:movieName,
            director: '',
            date:'',
        })
    }

    function addDirector(movieName, director){
        let movie= movies.find(movie=>movie.name===movieName)
        if(movie){
            movie.director=director
        }
    }

    function addDate(movieName, date){
        let movie= movies.find(movie=>movie.name===movieName)
        if(movie){
            movie.date=date
        }
    }

    function printMovies(){
        let filteredMovies= movies.filter(movie=>movie.name&&movie.director&& movie.date)
        filteredMovies.forEach(movieName=>{
            console.log(JSON.stringify(movieName));
        })
        
    }
    
    
}

movieInfo ([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])