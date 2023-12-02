<script>
	import "../app.css";
	import Nav from "../components/Nav.svelte";
	export let data;
</script>

<Nav />
<main class="mx-10 mt-10">
	{#if typeof data.home !== "undefined"}
		<a href="/">{data.home}</a>
	{/if}
	{#if typeof data.year !== "undefined"}
		&gt; <a href="/{data.year}">{data.year}</a>
	{/if}
	{#if typeof data.day !== "undefined"}
		&gt; {data.day}
	{/if}
	<slot />
</main>
