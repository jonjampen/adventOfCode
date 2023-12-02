<script>
	export let data;
	let days = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
	];
</script>

<h1 class="text-3xl">Advent of Code {data.year}</h1>
<br />
<h3 class="text-xl">Select Day</h3>
<ul class="list-disc pl-8">
	{#each days as day}
		<li><a href="{data.year}/{day}">Day {day}</a></li>
	{/each}
</ul>
