<script>
	import { name } from '$lib/bitches';
	const { data } = $props();
</script>

<div>
	<h1 class="text-xl">{data.post.title}</h1>

	<section class="flex w-full items-center justify-center">
		<div class="mt-10 w-2/3 text-gray-700">
			{@html data.post.content}
		</div>

		<div class="w-1/3">
			<div class="text-xl">More Blogs</div>
			<ul class="mt-10 list-disc pl-10 text-blue-700 underline">
				{#each data.summaries as { title, slug }}
					<li>
						<a href="/blog/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		</div>
		{name}
	</section>
</div>
