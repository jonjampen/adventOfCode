<script>
	import calculate from "./solution";
	let result = "";
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
<button on:click={(e) => (result = calculate(e))} id="part1">Solve for Part 1</button>
<button on:click={(e) => (result = calculate(e))} id="part2">Solve for Part 2</button>
<br />
<br />
<p>Result: {result}</p>
