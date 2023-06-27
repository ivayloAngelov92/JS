function solve (bandName, albumName, song){
    let rotation=2.5
    let songDuration=(albumName.length * bandName.length) * song.length / 2

    let totalRotations=songDuration/rotation
    console.log(`The plate was rotated ${Math.ceil(totalRotations)} times.`);
}

solve ('Rammstein', 'Sehnsucht',

'Engel')