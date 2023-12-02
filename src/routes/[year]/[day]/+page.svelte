<script>
	import { onMount } from "svelte";

	export let data;
	let formattedDay = data.day[0] === "0" ? data.day[1] : data.day;
	let Solution;
	onMount(async () => {
		try {
			Solution = (await import(`../../../solutions/${data.year}/${data.day}/Solution.svelte`)).default;
		} catch (e) {
			Solution = (await import(`../../../solutions/Fallback.svelte`)).default;
		}
	});
</script>

<h1 class="text-3xl">Advent of Code {data.year}: Day {data.day}</h1>
<a href="https://adventofcode.com/{data.year}/day/{formattedDay}" target="_blank" class="underline text-green-700">Read the problem</a>
<br />
<br />
<svelte:component this={Solution} />
