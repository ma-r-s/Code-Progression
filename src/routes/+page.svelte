<script>
	import * as Tone from 'tone';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { browser } from '$app/environment';
	import Keyboard from './Keyboard.svelte';
	let synth;
	let meter;
	let selected = new Set();
	if (browser) {
		synth = new Tone.Synth().toDestination();
		meter = new Tone.Meter();
		synth.connect(meter);
	}
	const notePressed = (note) => {
		synth.triggerAttackRelease(Tone.Frequency('C3').transpose(note.detail), '8n');
	};
</script>

<div
	class="bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-4 text-center gap-5 overflow-hidden"
>
	<div class="flex w-full grow">
		<div class="basis-1 grow border w-full">
			<Canvas>
				<Scene {meter} />
			</Canvas>
		</div>
		<div class="grid grid-cols-4 w-full grow basis-1">
			{#each Array(16) as grid}
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
	<div class="flex items-center justify-between gap-6 w-full mb-12">
		<Keyboard on:notePressed={notePressed} bind:selected />
		<p class="text-white font-bold uppercase text-3xl">
			{Array.from(selected)
				.map((note) => Tone.Frequency('C3').transpose(note).toNote())
				.join('-')}
		</p>
		<div class="flex flex-col gap-3">
			<button class="bg-orange-500 text-white px-4 py-2 rounded-full font-bold">Play</button>
			<button
				on:click={() => {
					console.log(Tone.Frequency('C3').transpose(0).toNote());
				}}
				class="bg-purple-500 text-white px-4 py-2 rounded-full font-bold">Chord</button
			>
		</div>
	</div>
</div>
