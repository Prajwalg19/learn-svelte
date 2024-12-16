<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex w-full gap-10 rounded-sm bg-blue-500 p-5 text-white">
	<a href="/">Home</a>
	<a href="/blog">Blogs</a>
	<a href="/account">Account</a>
	<a href="/profile">Profile</a>
</nav>

<div class="p-[2rem]">
	{@render children()}
</div>
