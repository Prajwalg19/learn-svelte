<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	const { data, form } = $props();
	let loading = $state(false);
	let deleting = $state([]);
	console.log(data.todos);
</script>

<section class="flex flex-col justify-start pt-5">
	<h1 class="mb-10 text-3xl">TODO App</h1>

	<form
		method="POST"
		action="?/create"
		class="flex items-center gap-10"
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}
	>
		<label for="description">Add a TODO:</label>
		<input
			disabled={loading}
			type="text"
			id="description"
			autocomplete="off"
			name="description"
			value={form?.description || ''}
			class="rounded-md border border-purple-600 px-3 py-2"
			onkeydown={(e) => {}}
		/>
		{#if form?.error}
			<p class="text-red-600">{form.error}</p>
		{/if}
	</form>

	<div class="mt-10 flex flex-col gap-4">
		<h1>List of TODO&apos;S</h1>
		<ul>
			{#each data.todos.filter((todo) => !deleting.includes(todo.id)) as { id, description, done } (id)}
				<li in:fly={{ y: 20 }} out:slide>
					<form
						action="?/delete"
						method="POST"
						class="flex max-w-xl justify-between"
						use:enhance={() => {
							deleting = [...deleting, id];
							return async ({ update }) => {
								await update();
								deleting = deleting.filter((id) => id != id);
							};
						}}
					>
						<input type="hidden" name="todoId" value={id} />
						<div>
							{description}
						</div>
						<button aria-label="Mark as completed">Done</button>
					</form>
				</li>
			{/each}
		</ul>
	</div>

	{#if loading}
		<section>Saving data.....</section>
	{/if}
</section>
