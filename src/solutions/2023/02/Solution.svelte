<script>
	let result = "";
	let solutions = [];

	function part1(array) {}

	function part2(array) {}

	function calculate(e) {
		let input = document.getElementById("input").value.trim().split("\n");
		let red = parseInt(document.getElementById("red").value);
		let blue = parseInt(document.getElementById("blue").value);
		let green = parseInt(document.getElementById("green").value);

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
		result = solutions.reduce((temp, val) => temp + val); // calc sum
	}
</script>

<label
	>Red:
	<input type="number" id="red" class="rounded w-10 border" placeholder="red" value="12" />
</label>
<label
	>Green:
	<input type="number" id="green" class="rounded w-10 border" placeholder="green" value="13" />
</label>
<label
	>Blue:
	<input type="number" id="blue" class="rounded w-10 border" placeholder="blue" value="14" />
</label>
<br />
<br />
<textarea name="input" id="input" cols="30" rows="10" class="border w-full" placeholder="Paste input to parse here..."></textarea>
<br />
<button on:click={calculate} id="part1">Solve for Part 1</button>
<button on:click={calculate} id="part2">Solve for Part 2</button>
<br />
<br />
<p>Valid Game Ids: {solutions}</p>
<p>Result: {result}</p>
