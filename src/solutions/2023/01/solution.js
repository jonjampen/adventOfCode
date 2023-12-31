function part1(array) {
    return array.filter((char) => !isNaN(parseInt(char)));
}

function part2(array) {
    let nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return array.map((char, i) => {
        if (!isNaN(parseInt(char))) {
            return char;
        }
        let currentString = "";
        for (let j = i; j < array.length; j++) {
            currentString += array[j];
            if (nums.includes(currentString)) {
                return nums.indexOf(currentString) + 1;
            }
        }
    });
}

export default function calculate(e) {
    let input = document.getElementById("input").value.split("\n");

    let lines = input.map((line) => {
        let array = [...line];

        let lineRes;
        if (e.target.id === "part1") {
            lineRes = part1(array);
        } else {
            lineRes = part2(array);
        }

        lineRes = lineRes.filter((el) => el !== undefined);
        return parseInt(lineRes[0] + "" + lineRes[lineRes.length - 1]);
    });

    return lines.reduce((partialSum, val) => partialSum + val);
}