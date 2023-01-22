<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let octaves = 3;
	export let selected = new Set();
	const natural = [true, false, true, false, true, true, false, true, false, true, false, true];
	const clicked = (note) => {
		if (selected.has(note)) selected.delete(note);
		else {
			dispatch('notePressed', note);
			selected.add(note);
		}
		selected = selected;
	};
</script>

<div class="flex">
	{#each Array(octaves * 12 + 1) as _, note}
		{#if natural[note % 12]}
			<button
				on:click={() => clicked(note)}
				class="mx-0.5 h-28 w-8 rounded-md transition duration-100 {selected.has(note)
					? 'bg-sky-500'
					: 'bg-white'} drop-shadow-lg "
			/>
		{:else}
			<button
				on:click={() => clicked(note)}
				class="z-10 -mx-3 h-16 w-6 rounded-b-full duration-100 transition border-black border-x-2 border-b-2 {selected.has(
					note
				)
					? 'bg-sky-500'
					: 'bg-black'}"
			/>
		{/if}
	{/each}
</div>
