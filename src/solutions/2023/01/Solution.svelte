<script>
	import { calculate, sum } from "./solution";
</script>

<textarea name="input" id="input" cols="30" rows="10" class="border w-full" placeholder="Paste input to parse here..."></textarea>
<br />
<button on:click={calculate} id="part1">Solve for Part 1</button>
<button on:click={calculate} id="part2">Solve for Part 2</button>
<br />
<br />
<p>Result: {sum}</p>
