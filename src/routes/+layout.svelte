<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";
	export let data;
</script>

<div class="min-h-[100vh] max-w-[100vw] flex flex-col justify-between overflow-hidden">
	<div class="">
		<Nav />
		<main class="mx-10 mt-10">
			<div class="text-gray-500">
				{#if typeof data.home !== "undefined"}
					<a href="/">{data.home}</a>
				{/if}
				{#if typeof data.year !== "undefined"}
					&gt; <a href="/{data.year}">{data.year}</a>
				{/if}
				{#if typeof data.day !== "undefined"}
					&gt; {data.day}
				{/if}
			</div>
			<slot />
		</main>
	</div>
	<Footer />
</div>
