<script>
	const { children } = $props();
</script>

{@render children()}

<form action="/logout" method="POST">
	<button> Log out </button>
</form>
