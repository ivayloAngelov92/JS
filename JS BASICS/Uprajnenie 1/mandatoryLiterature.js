function mandatoryLiterature(input){
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHours =Number(pagesCount / pagesPerHour);
    let HoursPerDay = totalHours / days;
    console.log(HoursPerDay);
}

mandatoryLiterature(["212 ", "20", "2"])