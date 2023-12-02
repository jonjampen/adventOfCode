<script>
	let sum = "";

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

	function calculate(e) {
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

		sum = lines.reduce((partialSum, val) => partialSum + val);
	}
</script>

<textarea name="input" id="input" cols="30" rows="10" class="border w-full" placeholder="Paste input to parse here..."></textarea>
<br />
<button on:click={calculate} id="part1">Solve for Part 1</button>
<button on:click={calculate} id="part2">Solve for Part 2</button>
<br />
<br />
<p>Result: {sum}</p>
