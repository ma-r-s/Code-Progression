<script>
	import * as Tone from 'tone';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div
	class="bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-4 text-center gap-5"
>
	<div class="basis-1 grow border w-full">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
	<div class="grid grid-cols-4 grid-rows-3 w-full grow basis-1">
		{#each Array(11) as grid}
			<div class="bg-zinc-800 border flex items-center justify-center">
				<svg viewBox="0 0 20 20" fill="currentColor" class="w-12">
					<circle cx="10" cy="10" r="10" fill="white" />
					<line
						x1="5"
						y1="10"
						x2="15"
						y2="10"
						stroke="black"
						stroke-linecap="round"
						stroke-width="2"
					/>
					<line
						y1="5"
						x1="10"
						y2="15"
						x2="10"
						stroke="black"
						stroke-linecap="round"
						stroke-width="2"
					/>
				</svg>
			</div>
		{/each}
	</div>
</div>
