function part1(input) {
    function checkPartNumber(input, y, minX, maxX) {
        for (var row = -1; row <= 1; row++) {
            for (var numIndex = -1; numIndex <= maxX - minX + 1; numIndex++) {
                if (checkPossiblePartNumber(input, y + row, minX + numIndex)) return true;
            }
        }
        return false
    }

    function checkPossiblePartNumber(input, y, x) {
        if (y >= 0 && y < input.length && x >= 0 && x < input[y].length && input[y][x]) {
            return !(/\d|\./.test(input[y][x]))
        }
        return false;
    }

    let sum = 0;
    input.map((row, rowNr) => {
        let reg = /\d+/g;
        let matches;

        while (matches = reg.exec(row)) {
            sum += checkPartNumber(input, rowNr, matches.index, matches.index + matches[0].length - 1) ? parseInt(matches[0]) : 0;
        }
    })

    return sum;
}

function part2(input) {
    return;
}

export default function calculate(e) {
    let input = document.getElementById("input").value.trim().split("\n");

    if (e.target.id === "part1") {
        return part1(input);
    } else {
        return part2(input);
    }
}