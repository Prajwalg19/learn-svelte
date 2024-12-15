<script>
	import { page } from '$app/stores';
	import { emojis } from './emoji';
</script>

<div class="flex min-h-[70vh] w-full flex-col items-center justify-center gap-10">
	<h1 class="text-4xl">{emojis[$page.status]}</h1>
	<p>{$page.status + ' ' + $page.error?.message}</p>
	<p>Error code {$page.error.code}</p>
</div>
