<script>
	import { onMount } from "svelte";

	export let data;
	let Solution;
	onMount(async () => {
		Solution = (await import(`../../../solutions/${data.year}/${data.day}/Solution.svelte`)).default;
	});
</script>

<h1 class="text-3xl">Advent of Code {data.year}: Day {data.day}</h1>
<svelte:component this={Solution} />
