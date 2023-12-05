<script>
	import calculate from "./solution";
	let result = "";
</script>

<br />
<textarea name="input" id="input" cols="30" rows="10" class="border w-full" placeholder="Paste input to parse here..."></textarea>
<br />
<button on:click={(e) => (result = calculate(e))} id="part1">Solve for Part 1</button>
<button on:click={(e) => (result = calculate(e))} id="part2">Solve for Part 2</button>
<br />
<br />
<p>Result: {result}</p>
