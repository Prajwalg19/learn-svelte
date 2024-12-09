<script>
	import { navigating } from '$app/stores';
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	const { data = $bindable(), form } = $props();
	let chain = $state('');
	let loading = $state(false);
	let deleting = $state([]);
</script>

<section class="flex flex-col justify-start pt-5">
	<h1 class="mb-10 text-3xl">TODO App</h1>

	<label for="description">Add a TODO:</label>
	<input
		disabled={loading}
		type="text"
		id="description"
		autocomplete="off"
		name="description"
		value={form?.description || ''}
		class="rounded-md border border-purple-600 px-3 py-2"
		onkeydown={async (e) => {
			if (e.key != 'Enter') return;
			const res = await fetch('/todo/', {
				method: 'POST',
				body: JSON.stringify({ description: e.currentTarget.value }),
				headers: {
					'Content-type': 'application/json'
				}
			});
			const { id } = await res.json();
			data.todos = [
				...data.todos,
				{
					id,
					description
				}
			];

			e.currentTarget.value = '';
		}}
	/>
	{#if form?.error}
		<p class="text-red-600">{form.error}</p>
	{/if}

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
