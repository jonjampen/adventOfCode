let result = "";
let solutions = [];

function part1(input) {
    let red = parseInt(document.getElementById("red").value);
    let blue = parseInt(document.getElementById("blue").value);
    let green = parseInt(document.getElementById("green").value);

    // validate games
    solutions = input.map((game, gameId) => {
        let gameValid = game.map((draw) => {
            return !(draw.green > green) && !(draw.red > red) && !(draw.blue > blue);
        });
        if (!gameValid.includes(false)) {
            return gameId + 1;
        }
        return false;
    });
    solutions = solutions.filter((s) => s != false); // remove false values
    return solutions.reduce((temp, val) => temp + val); // calc sum
}

function part2(input) {
    solutions = input.map((game, gameId) => {
        let minColor = {
            red: 0,
            green: 0,
            blue: 0,
        };

        game.map((draw) => {
            minColor.red = Math.max(draw.red || 0, minColor.red);
            minColor.green = Math.max(draw.green || 0, minColor.green);
            minColor.blue = Math.max(draw.blue || 0, minColor.blue);
            console.log(minColor, draw.red, draw.green, draw.blue);
        });
        return minColor.red * minColor.green * minColor.blue;
    });
    return solutions.reduce((temp, val) => temp + val);
}

export default function calculate(e) {
    let input = document.getElementById("input").value.trim().split("\n");

    /* desired structure
    input = [
        [
           {"red": 1, "green": 2} // draw
           {"red": 1, "green": 2} // draw
           {"red": 1, "green": 2} // draw
        ] // game
        ... // more games
    ]
     */

    // format input
    input = input.map((line) => {
        line = line.substring(line.indexOf(":") + 1); // Remove "Game 1:"
        let draws = line.split(";"); // split draws

        return draws.map((draw) => {
            draw.trim();
            return draw.split(", ").reduce(function (obj, str, index) {
                str = str.trim(); // remove spaces at beginning
                let strParts = str.split(" ");
                if (strParts[0] && strParts[1]) {
                    obj[strParts[1]] = parseInt(strParts[0]);
                }
                return obj;
            }, {});
        });
    });

    if (e.target.id === "part1") {
        return part1(input);
    } else {
        return part2(input);
    }
}