function solve(speed, area) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    let status = "";
    if (speed <= limits[area]) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else if (speed <= limits[area] + 20) {
        status = "speeding";
        console.log(
            `The speed is ${speed - limits[area]
            } km/h faster than the allowed speed of ${limits[area]} - ${status}`
        );
    } else if (speed <= limits[area] + 40) {
        status = "excessive speeding";
        console.log(
            `The speed is ${speed - limits[area]
            } km/h faster than the allowed speed of ${limits[area]} - ${status}`
        );
    } else {
        status = "reckless driving";
        console.log(
            `The speed is ${speed - limits[area]
            } km/h faster than the allowed speed of ${limits[area]} - ${status}`
        );
    }
}

solve(200, "motorway");
