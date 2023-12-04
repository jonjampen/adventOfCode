<script>
	import Prism from "prismjs";
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
	let open = false;
</script>

<h1 class="text-3xl">Advent of Code {data.year}: Day {data.day}</h1>
<a href="https://adventofcode.com/{data.year}/day/{formattedDay}" target="_blank" class="underline text-green-700">Read the problem</a>
<br />
<br />
<div class="bg-gray-200 py-4 px-2 cursor-pointer" on:click={() => (open = !open)}>
	<h3 class="underline">Show solution code</h3>
</div>
{#if open}
	<pre><code class="code">{@html Prism.highlight(data.code, Prism.languages["javascript"])}</code></pre>
{/if}
<br />
<svelte:component this={Solution} />
<br />

<svelte:head>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<style>
	.code {
		white-space: pre-wrap;
	}
	pre {
		background-color: #f5f5f5;
		padding: 10px;
		border-radius: 5px;
	}

	code {
		font-family: "Courier New", Courier, monospace;
	}
</style>
