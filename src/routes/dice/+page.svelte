<script>
	/**@type {number}*/
	let diceNum = $state();
	const rollDice = async () => {
		const number = await fetch('/dice/roll');
		diceNum = await number.json();
	};
</script>

<button
	onclick={rollDice}
	class="rounded-md bg-blue-500 p-2 text-white transition ease-in-out hover:bg-blue-500"
	>Roll the dice</button
>
{#if diceNum != undefined}
	<p>The number on the dice is {diceNum}</p>
{/if}
