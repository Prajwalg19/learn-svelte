<script>
	let { children } = $props();
</script>

<nav class="flex flex-row items-center gap-10">
	<a href="/nestinghome">home</a>
	<a href="/nestinghome/z">z</a>
	<a href="/nestinghome/z/y">/z/y</a>
	<a href="/nestinghome/z/y/x">/z/y/x</a>
</nav>

<div class="wrapper" data-name="root">
	{@render children()}
</div>

<style>
	:global(.wrapper) {
		position: relative;
		padding: 1rem;
		margin: 1rem 0 0 0;
		border: 2px solid #999;
		border-radius: 5px;
	}
	:global(.wrapper::before) {
		position: absolute;
		content: attr(data-name) ' layout';
		top: -1rem;
		left: 1rem;
		background-color: blueviolet;
		padding: 0.5rem;
		border-radius: 5px;
		color: white;
		line-height: 1;
	}
</style>
