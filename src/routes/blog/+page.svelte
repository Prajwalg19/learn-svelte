<script>
	const { data } = $props();
	console.log(data);
</script>

<div class="flex flex-col gap-10">
	<h1 class="text-xl">Blogs</h1>
	<ul>
		{#each data.summaries as { slug, title }}
			<li><a class="text-blue-900 underline" href="/blog/{slug}">{title}</a></li>
		{/each}
	</ul>
</div>
